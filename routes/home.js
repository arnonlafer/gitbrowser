const express = require('express');
const env = require("./../env-vars.json");
const router = express.Router();
	
	/*
		The following root checks if user is authenticated or not and sends him the corresponding page. In case he is authenticated,
		the incoming request would contain token saved in cookies.
	*/

router.get("/", (req, res) => {
	if (req.cookies && req.cookies['token']) {
		res.sendFile(__dirname + "/views/index.htm"); //user is authenticated. Take him/her to main page
	}
	else {
		res.redirect("/authenticate"); //user is not logged in. Take him/her to login page
	}
});

module.exports = router;

