'use strict';

var input = '';
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(data){
  input += data;
});

process.stdin.on('end', function(){
  input = input.trim().split('\n').map(Number);
  input.slice(1, input[0] + 1).forEach(function(num){
    console.log(num + 1);
  });
});
