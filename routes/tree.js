const express = require('express');
const fetch = require("node-fetch"); 
const env = require("./../env-vars.json");
const tree = require("./../models/entry.js");
const router = express.Router();
const mysql = require("mysql");

	//establising a connection with mysql database
	
	console.log({
	"host" : env['db_host'],
	"user" : env['db_user'],
	"password" : env['db_pass'],
	"database" : env['db_name']
});
	
let con = mysql.createConnection({
	"host" : env['db_host'],
	"user" : env['db_user'],
	"password" : env['db_pass'],
	"database" : env['db_name']
});

//con.connect();
	
	/*
		The following root will send the contents of repositry. You have to make a request to this root with owner of the repo and name
		of the repo like this
			
			http://mywebsite.com/repo/owner/repo_name
		
		If you are not authorized, you will get a response with err else you will get the contents of the repositry
	*/

router.get("/:owner/:name", (req, res) => {
	if (!req.cookies['token']) {
		/*
			This above if statement will run if the user is not authenticated. In this case we will send user a message to
			authenticate.
		*/
		res.send({"message" : "Please authenticate yourself", "err" : "not authenticated"});
	}
	
		/*
			The following functions, tree.getContent, returns a promise. If the repositry data is received successfully, the promised is
			resolved and as soon as promise is resolved, the data is sent to the client.
		*/

	tree.getContent("http://api.github.com/repos/" + req.params.owner + "/" + req.params.name + "/contents", req.cookies.token).then(data => {
		
		//This means data is received successfully
		
		res.send(data);
	}).catch(err => {
		
		//There is some error while fetching the data
		
		res.send({"message" : "Some error" , "err" : err});
	})
	
});

	/*
		The following root returns all repositries that are saved in our relational database. Roots & Repository are used interchangeably.
	*/

router.get("/roots", (req, res) => {
	con.query("select * from roots", (err, res_) => {
		if (err)
			res.send({"err" : err, "message" : "Error getting root"});
		res.send(res_);
	});
});

	/*
		The following root registers a new repository. It needs owner and name of the repository.
	*/

router.get("/new-root", (req, res) => {
	
	/*
		First, it is checked whether the repository is valid or not. For this purpose a request is sent to API for getting the content.
		If it is valid, contents of the repo are received. 
	*/
	
	tree.getContent("http://api.github.com/repos/" + req.query.owner + "/" + req.query.name + "/contents", req.cookies['token']).then(data => {
		con.query("insert into roots (owner, name) values ('"+req.query.owner+"', '"+req.query.name+"')", (err, res_) => {
			if (err)
				res.send({"message" : "Error while inserting data to db", "err" : err});
			data.forEach(entry => {
				
				/*
					The repository content, that we received, will be inserted into database.
				*/
				
				if (entry.parent != "") //This means that this entry is present in subdirectory. So, its parent will be NULL in mySQL
					con.query("insert into entries (id, name, parent, type, root) VALUES ('"+entry.id+"', '"+entry.name+"', '"+entry.parent+"', '"+entry.type+"', '"+res_.insertId+"')", (err) => {
						if (err)
							throw err;
					});
				else // This entry is in the main directory.
					con.query("insert into entries (id, name, type, root) VALUES ('"+entry.id+"', '"+entry.name+"', '"+entry.type+"', '"+res_.insertId+"')", (err) => {
						if (err)
							throw err;
					});
			})
			res.send({"id" : res_.insertId, data : data})
		});
	}).catch(err => {
		
		//Unable to get the repo content. The repository address may be invalid. It can be seen from err.
		
		res.send({"message" : "Some error" , "err" : err});
	})
});

	/*
		The following route returns contents of a repository saved in our database. This does not fetch data from API; instead it fetches
		from our relational database i-e mySQL database. 
	*/

router.get("/root", (req, res) => {
	con.query("select * from entries where root=" + req.query.root + "", (err, res_) => {
		if (err)
			res.send(err);
		res.send(res_);
	});
});

	/*
		The following rot rename an existing entry. Entry and Node is used interchangeably.
	*/

router.post("/rename-node", (req, res) => {
	con.query("update entries set name = '" + req.body.new_name + "' where id = '" + req.body.node + "' and root = '" + req.body.root + "'", (err, res_) => {
		if (err) throw err;
		console.log(res_);
		res.send({"message" : "Update successfully"});
	})
});

module.exports = router;