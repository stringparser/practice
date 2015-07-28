'use strict';

// var rowSum = 9*10/2;
var sudoku = {
  board: '',
  empty: [],
  length: 9,
  checkRow: function(i, j, value){
    var len = this.length;
    var index = -1;
    while(index < len){
      if(value === this.board[++index][j]){
        return false;
      }
    }
    return true;
  },
  checkColumn: function(i, j, value){
    var len = this.length;
    var index = -1;
    while(index < len){
      if(value === this.board[i][++index]){
        return false;
      }
    }
    return true;
  },
  checkBox: function(i, j, value){
    var len = this.boxLength;
    var length = this.length;
    var imin = Math.floor(i/len);
    var jmin = Math.floor(j/len);
    var imax = imin + len;
    var jmax = jmin + len;

    for(var index = imin; index < imax; ++index){
      for(var jndex = jmin; jndex < jmax; ++jndex){
        if(value === this.board[index*length + jndex]){
          return false;
        }
      }
    }
    return true;
  },
  checkValue: function(i, j, value){
    var check = this.checkRow(i,j, value) &&
      this.checkColumn(i,j, value) &&
      this.checkBox(i,j, value);

    if(check){ return true; }
    return false;

  }
};

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(data){
  sudoku.board += data || '';
});
// n*(n+1)/2 sum for n natural numbers

process.stdin.on('end', function(){
  // cleanup the board
  sudoku.board = sudoku.board.replace(/[\n ]+/g, '').trim();

  // get empty places first
  sudoku.board.replace(/0/g, function($0, index){
    sudoku.empty.push([Math.floor(index/sudoku.length), index % sudoku.length]);
  });

  // parse the board to a 1D array
  sudoku.board = sudoku.board.match(/\d{6}/g).map(function(row){
    return row.split('').map(Number);
  });

  console.log(sudoku);
});
