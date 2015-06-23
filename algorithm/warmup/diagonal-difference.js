'use strict';

process.stdin.setEncoding('utf8');

var n;
var i = 1, j = 1;
var diag = [0, 0];

process.stdin.on('data', function(data){
  if(!data){ return ; }

  data.match(/[+-]?\d+/g).forEach(function(num){
    if(!n){
      console.log('n', num);
      return (n = Number(num));
    }
    if(i === j){
      console.log('l', i,j, num);
      diag[0] += Number(num);
    }

    if(j === n-i+1){
      console.log('r', i,j, num);
      diag[1] += Number(num);
    }
    if(j === n){ j = 1; ++i; } else { ++j; }
  });
});

process.stdin.on('end', function(){
  console.log(Math.abs(diag[0]-diag[1]));
});
