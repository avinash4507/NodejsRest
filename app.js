var express = require('express');

var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/booksAPI');

var Book = require('./models/bookModel');

var app = express();

var port = process.env.PORT || 3000;

var myRouter = express.Router();

myRouter.route('/Books')
    .get(function(req, res){
        Book.find(function(err, books){
            if(err)
                res.status(500).send(err);
            else
                res.json(books);
        });
    })

app.use('/api', myRouter);

app.get('/', function(req, res) {
    res.send('Welcome to my Node and Express app!!');
});

app.listen(port, function() {
    console.log('App listening on port ' + port + '!');
});