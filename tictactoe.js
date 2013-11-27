/**
 * TicTacToe
 */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.returnExports = factory();
  }
}(this, function (exports) {
    var Board = function(){

    };

    Board.prototype.getBoard = function(){
        return [];
    };

    Board.prototype.play = function(){

    };

    return {
        Board: Board
    };
}));