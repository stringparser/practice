'use strict';

var input = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(data){
  input += data || '';
});

process.stdin.on('end', function(){
  input = input.trim().split('\n');
  var n = Number(input[0]);
  input.slice(1, n + 1).forEach(function(point){
    point = point.trim().split(/[ ]+/).map(Number);
    console.log(
      2*point[2] - point[0],
      2*point[3] - point[1]
    );
  });
});
