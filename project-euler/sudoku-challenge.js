'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf8');

var sudoku = [];

process.stdin.on('data', function(data){
  sudoku += data || '';
});

var empty = {};
var rowSum = 9*10/2;

// 012345678'.split('').map(Number).forEach(function(a){ console.log(a, Math.floor(a/3)); });

process.stdin.on('end', function(){
  sudoku = sudoku.trim().match(/(\d[ ]*){9}/g).map(function(row, i){
    var sum = 0;
    row = row.split('').map(function(column, j){
      sum += column = Number(column);
      if(column){ return column; }
      if(!empty[i]){ empty[i] = []; }
      empty[i].push(j);
      return column;
    });

    // the easy ones
    if(empty[i] && empty[i].length < 2){
      row[empty[i][0]] = rowSum - sum;
      delete empty[i];
    }

    return row;
  });
});
