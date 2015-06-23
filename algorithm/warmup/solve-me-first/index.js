'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf8');

var sum = 0;
process.stdin.on('data', function(data){
  if(!data){ return ; }
  data.split('\n').forEach(function(num){
    num = Number(num); if(!num){ return ; }
    sum += num;
  });
});

process.stdin.on('end', function(){
  console.log(sum);
});
