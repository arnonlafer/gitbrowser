const fetch = require('node-fetch'); //used to fetch data from github API.
let top_ = 0;

const Entry = class{
	constructor (name, type, path, parent = "") {
		this.id = top_++;
		this.type = type; //type can be file or dir
		this.name = name;
		this.path = path; //the parent directory of the entry
		this.parent = parent;
	}
	getContent(token) {
		return new Promise((resolve, reject) => {
			
			/*
				If the entry/node is dir then contents of this directory is fetched from github using API. This is a recursive process.
			*/
			
			if (this.type == "dir") {
				getContent(this.path + "/" +this.name, token, this.id).then(data => {
					resolve(data);
				}).catch(err => {
					reject(err)
				});
			}
			else {
				resolve([]);
			}
		});
	}
};

	/*
		The following function will be used to fetch repo contents from github.
	*/
const getContent = (url, token = "", parent = "") => {
	let entries = new Array();
	return new Promise((resolve, reject) => {
		//resolve([{"id":0,"type":"file","name":"Dockerfile","path":"http://api.github.com/repos/kelseyhightower/helloworld/contents","parent":""},{"id":1,"type":"file","name":"LICENSE","path":"http://api.github.com/repos/kelseyhightower/helloworld/contents","parent":""},{"id":2,"type":"file","name":"README.md","path":"http://api.github.com/repos/kelseyhightower/helloworld/contents","parent":""},{"id":3,"type":"file","name":"main.go","path":"http://api.github.com/repos/kelseyhightower/helloworld/contents","parent":""},{"id":4,"type":"dir","name":"qa","path":"http://api.github.com/repos/kelseyhightower/helloworld/contents","parent":""},{"id":5,"type":"dir","name":"staging","path":"http://api.github.com/repos/kelseyhightower/helloworld/contents","parent":""},{"id":6,"type":"file","name":"cloudbuild.yaml","path":"http://api.github.com/repos/kelseyhightower/helloworld/contents/qa","parent":4},{"id":7,"type":"file","name":"cloudbuild.yaml","path":"http://api.github.com/repos/kelseyhightower/helloworld/contents/staging","parent":5}]);
		fetch(url, {
			"headers" : {
				"Authorization" : "token " + token //token is sent when a request is made to API
			}
		}).then(res => {
			res.json().then(res => {
				//If the repo is invalid then the following message is received
				if (res.message && res.message == "Not Found") {
					reject({"message" : "Repo not found", "err" : res});
				}
				let i = 0;
				let newEntries = []; //New entries/nodes will be saved in this array
				let newPromises = []; //for each entry, a functions is called that returns a promise and check the contents in it
									  //if it is a directory. That promise is save in this array.
				res.forEach(entry => {
					newEntries[i] = new Entry(entry.name, entry.type, url, parent, entries);
					newPromises.push(newEntries[i].getContent(token));
					entries.push(newEntries[i++]); //each entry is pushed to entries array which contains all the entries
				});
				Promise.all(newPromises).then(data => {
					
					/*
						When this promise is resolved, it means that all the contents of subdirectories is received. Now, these
						entries are pushed in the entries array, which will then be delivered to the callee when this promise is resolved.
					*/
					
					data.forEach(entries_ => {
						entries_.forEach(entry => {
							entries.push(entry);
						})
					})
					resolve(entries);
				})
			}).catch(err => {
				reject({"message" : "Error while getting response in JSON/Invalid JSON", "place" : url});
			})
		}).catch(err => {
			//error in fetching data
			reject({"message" : "Error in Request", "err" : err});
		});
	})
}

module.exports = {getContent : getContent}