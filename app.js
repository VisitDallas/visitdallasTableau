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

app.get("/sales/metrics07112019", function(req, res){
	res.render("metrics07112019");
});

app.get("/sales/5", function(req, res){
	res.render("5");
});

app.get("/sales/6", function(req, res){
	res.render("6");
});

app.get("/sales/definiteslast5years", function(req, res){
	res.render("definitesLast5Years");
});

app.get("/sales/1", function(req,res){
	res.render("1");
});

app.get("/sales/sampleLocationsMap", function(req, res){
	res.render("sampleLocationsMap");
});

app.get("/sales/testDashboard", function(req, res){
	res.render("testDashboard");
})

app.get("/marketing", function(req, res){
	res.render("marketinghome");
});

app.get("/marketing/mm81219", function(req, res){
	res.render("mm81219");
});

app.get("/marketing/mm819219", function(req, res){
	res.render("mm819219");
});

app.get("/marketing/googleAds2019", function(req, res){
	res.render("googleAds2019");
});

app.get("/marketing/7", function(req, res){
	res.render("7");
});

app.listen(process.env.PORT, process.env.IP);