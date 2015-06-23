'use strict';

var sum = 0;

process.stdin.setEncoding('utf8');

process.stdin.on('data', function(data){
  if(!data){ return; }
  data.split('\n').forEach(function(line){
    var num = line.match(/(\d+)[ ]*?(\d+)?/g);
    if(num === null){ sum = 0; }
    else if(num[1]){
      console.log(Number(num[0]) + Number(num[1]));
    }
  });
});
