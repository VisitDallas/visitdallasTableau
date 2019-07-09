var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/sales", function(req, res){
	res.render("saleshome");
});

app.get("/sales/metrics07092019", function(req, res){
	res.render("metrics07092019");
});

app.listen(process.env.PORT, process.env.IP);