var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var catController = require(__dirname + '/cat/catController.js');

mongoose.connect('mongodb://localhost/mvp'); //to fix

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client'));

app.get('api/cat', catController.allCats);
app.post('api/cat', catController.newCat);

app.listen(8000); //to fix

module.exports = app;