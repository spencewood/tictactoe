/**
 * TicTacToe
 */
var util = require('util');
var Stately = require('stately.js');

var state = Stately.machine({
    PlayerOneTurn: {
        play: 'PlayerTwoTurn'
    },
    PlayerTwoTurn: {
        play: 'PlayerOneTurn'
    },
    Complete: {}
});

var Board = function(board){
};

Board.prototype.getBoard = function(){
    return [2, 2, 2, 2, 2, 2, 2, 2, 2];
};

Board.prototype.play = function(player, spot){
    this.state.play();
};

module.exports = {
    Board: Board
};