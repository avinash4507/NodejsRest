var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.send('Welcome to my Node and Express app!!');
});

app.listen(port, function() {
    console.log('App listening on port ' + port + '!');
});