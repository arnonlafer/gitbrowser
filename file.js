const mysql = require('mysql');
let con = mysql.createConnection({
  "host" : "localhost",
  "user" : "",
   "password" : "",
   "database" : "github-tv"
});
con.query("select * from entries", (err, res) => {
   if (err) throw err;
console.log(res);

}) 