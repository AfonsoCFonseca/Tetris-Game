var express = require('express')
var path = require('path');
var bodyParser = require('body-parser');
var app = express()

var requests = require('./server/routerRequests.js')
var controller = require('./server/routerController.js')

var port = process.env.PORT || 8080;

app.use('/public', express.static(path.join(__dirname, '/public')));
app.use('/dist', express.static(path.join(__dirname, '/dist')));
app.use('/node_modules', express.static(path.join(__dirname, '/node_modules')));
app.use('/vendor', express.static(path.join(__dirname, '/vendor')));
app.use('/src', express.static(path.join(__dirname, '/src')));

app.use(bodyParser.json(
  {limit: '1mb'}
))

app.use( '/' , requests )
app.use( '/' , controller )


app.listen(port, function(){
	console.log(__dirname);
	console.log('Simple Server Running on port 8080')
})
