'use strict';

var input = '';
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(data){
  input += data || '';
});

var cycles = [1];
process.stdin.on('end', function(){
  input = input.trim().split('\n').map(Number);
  input.slice(1, input[0] + 1).forEach(function(num){
    if(cycles[num]){ return console.log(cycles[num]); }
    var index = cycles.length - 1;
    var height = cycles[index];
    while(index < num){
      if(index % 2 === 0){ height = 2*height; }
      else { ++height; }
      cycles[++index] = height;
    }
    console.log(height);
  });
});
