var ttt = require('../tictactoe');

require('should');

describe('TicTacToe', function(){
    describe('board', function(){
        it('should be able to instantiate a new board', function(){
            (new ttt.Board()).should.be.instanceOf(Object);
        });

        it('should initialize state', function(){
            (new ttt.Board()).should.be.instanceOf(Object);
        });

        describe('#getBoard', function(){
            it('should return an array', function(){
                var b = new ttt.Board();
                b.getBoard().should.be.instanceOf(Array);
            });
        });

        describe('#play', function(){

        });
    });
});