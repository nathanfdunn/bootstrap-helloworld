var express = require('express');
var app = express();
var port = 5000

app.use(express.static(__dirname + '/public'));

app.listen(port, function(){
	console.log('Bootstrap Hello World running on port', port);
});