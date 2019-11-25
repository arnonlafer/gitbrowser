const express = require('express');
//const parentDir = __dirname.substr(0, __dirname.lastIndexOf('\\')); //We use this to goto parent directory

	/*
		We have to send requests to Github API. node does not have fetch API. So, we used node-fetch module to get this API.
		We can also use request module for this purpose.
	*/
const fetch = require("node-fetch"); 
const env = require("./../env-vars.json");
const router = express.Router();
	/*
		The following root checks if a user is authorized or not. If he/she is authorized then he will be redirected to get tree
		page. Otherwise, he will be redirected to login page for our app that we creared on github. We check this condition by checking
		token property in cookie of incoming request.
	*/

router.get("/", (req, res) => {
	if (req.cookies && req.cookies['token']) {
		res.redirect("/home") //user is authenticated. Take him/her to main page
	}
	else {
		res.sendFile(__dirname + "/views/authenticate.htm");
	}
});
router.get("/re", (req, res) => {
	if (req.cookies && req.cookies['token']) {
		res.redirect("/home") //user is authenticated. Take him/her to main page
	}
	else {
		res.redirect("https://github.com/login/oauth/authorize?client_id=" + env['client_id']); //user is not logged in. Take him/her to login page
	}
});

	/*
		If the user successfully logins, then github will make request to this route with a code. Then we send a post request to github
		to get the access_token of the user. This request should be sent within 10 minutes of getting the token. Otherwise code will
		expire.
	*/

router.get("/callback", (req, res) => {
	fetch("https://github.com/login/oauth/access_token", {
		"method" : "POST",
		"body" : "client_id="+env['client_id']+"&client_secret="+env['client_secret']+"&code="+req.query.code, //we have sent three parameters to API. All
																											   //All of these are necessary.
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
			'Accept' : 'application/json' //we want response from API in json
		},
	}).then(res_ => {
		res_.json().then(res__ => {
			
			/*
				Here we get the response, converted into json. We will check whether the response contains access_token. If it contains
				access_token, then we will set a cookie that will save this access_token. Otherwise we will send an error message tp user.
			*/
			
			if (res__['access_token']) {
				res.cookie("token", res__['access_token']);
				res.redirect("/home");
			}
			else {
				res.send("No token found");
			}
		})
	}).catch(err => {
		res.send({"message" : "Got an Error", "err" : err});
	});
});


module.exports = router;

