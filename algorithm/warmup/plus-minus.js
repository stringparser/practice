'use strict';

process.stdin.setEncoding('utf8');

var count = [0, 0, 0];
var length;

process.stdin.on('data', function(data){
  if(!data){ return; }

  var input = data.match(/[+-]?\d+/g);
  var integer;

  var index = Number(input[0]) + 1;
  length = index-1;

  while(--index){
    integer = Number(input[index]);
    if(integer > 0){
      ++count[0];
    } else if(integer < 0){
      ++count[1];
    } else {
      ++count[2];
    }
  }
});

process.stdin.on('end', function(){
  count.forEach(function(num){
    console.log(num/length);
  });
});
