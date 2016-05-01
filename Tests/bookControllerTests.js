var should = require('should');
var sinon = require('sinon');
    
describe('Book Controller Tests', function() {
    describe('Post Test', function() {
        it('should not allow an empty title on Post', function() {
            var Book = function(book){this.save = function(){}};
            
            var req = {
                body: {
                    author: 'Babita'
                }
            };
            
            var res = {
                status: sinon.spy(),
                send: sinon.spy()
            };
            
            var bookController = require('../Controllers/bookControllers')(Book);
            bookController.post(req, res);
            
            res.status.calledWith(400).should.equal(true, 'Bad Status: ' + res.status.args[0][0]);
            res.send.calledWith('Title is Required').should.equal(true);
        });
    });
});