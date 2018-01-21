// Framework d'aide au dev : Express
var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/guests');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}))

// appel la fonction définit par le export dans cats.js
var guests = require('./routes/guest.js')(app)
 
var server = app.listen(3000, function() {
	console.log('Server running at http://localhost:3000/');
});