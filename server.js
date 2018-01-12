var http = require('http');
var express = require('express');
var path = require('path');
var app = express();

app.use('/static', express.static(path.join(__dirname, 'node_modules')));
app.use('/static', express.static(path.join(__dirname, 'src/')));
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
}).listen(5000);
