var express = require('express');
var bodyParser = require('body-parser');

var app = express();


app.use(express.static('./client'));
//app.use(express.static('./node_modules/react-bootstrap/dist'))

app.get('/', function(req, res){
	res.sendFile(__dirname +'/client/index.html');
})

app.use(bodyParser.json());

var server = app.listen(3000, function(){
	console.log("The Pathfinder Ability Score Calculator server is up and running on Port 3000!");
})

