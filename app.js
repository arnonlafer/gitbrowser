const express = require("express");
const fetch = require("node-fetch"); //fetch will be used to send requests to github api
const cookieParser = require("cookie-parser"); //This is used to parse cookies from incoming requests. Tokens are saved in cookies. 
const bodyParser = require("body-parser");
const env = require("./env-vars.json"); //Some data for this app is saved in this file including database information and App keys
const app = express();

const authenticate = require("./routes/authenticate.js");
const home = require("./routes/home.js");
const repo = require("./routes/tree.js");

//middlewares
app.use(cookieParser());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("./public"));

app.use("/authenticate", authenticate);
app.use("/home", home);
app.use("/repo", repo);


app.listen(3000);