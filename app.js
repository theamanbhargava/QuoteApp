/**
 * Created by AmanB on 10-05-2017.
 */
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/", function (req, res) {
	var url = "https://talaikis.com/api/quotes/random";
	request(url, function (error, response, body) {
		if(!error && response.statusCode == 200){
			var data = JSON.parse(body);
			res.render("results", {data : data});
		}
	});
});

app.listen(process.env.PORT, process.env.IP, function () {
	console.log("Quotes App is deployed on port 4000");
});
