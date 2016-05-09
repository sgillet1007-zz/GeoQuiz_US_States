var express = require('express');

var app = express();
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.render('index');
});

var server = app.listen(7777, function() {
	console.log('Express server listening on port ' + server.address().port);
});
