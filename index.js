// Framework d'aide au dev : Express
var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/guests');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
	next();
  });

// appel la fonction définit par le export dans guests.js
var guests = require('./routes/guest.js')(app)
 
var server = app.listen(3001, function() {
	console.log('Server running at http://localhost:3001/');
});