'use strict';

var sum = 0, tests = 0;

process.stdin.setEncoding('utf8');

process.stdin.on('data', function(data){
  if(!data){ return; }
  data.split('\n').forEach(function(line){
    var num = line.match(/(\d+)[ ]*?(\d+)?/g);
    if(num === null){ return; }
    else if(num[1] === void 0){
      tests = Number(num[0]) + 1;
    } else if(--tests){
      sum += Number(num[0]) + Number(num[1]);
    } else {
      process.emit('end');
    }
  });
});

process.stdin.on('end', function(){
  console.log(sum, tests);
});
