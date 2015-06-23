'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf8');

var sum = 0, len = 0;

process.stdin.on('data', function (data) {
  if(!data){ return ; }
  data.match(/\d+/g).forEach(function(num){
    if(len){
      sum += Number(num);
    } else {
      len = Number(num);
    }
  });
});

process.stdin.on('end', function() {
  console.log(sum);
});
