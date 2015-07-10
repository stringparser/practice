'use strict';

var input = '';
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(data){
  input += data || '';
});

process.stdin.on('end', function(){
  input = input.trim().split('\n');
  var n = Number(input[0]);
  input.slice(1, n + 1).forEach(function(num){
    console.log(sn(Number(num)));
  });
});

var sums = {1: 1};
function sn(num){
  if(sums[num]){ return sums[num]; }
  if(num < 1){ return 0; }

  var sum = 0;
  var index = num + 1;

  while(--index > 1){
    sum += index*index - (index - 1)*(index - 1);
  }
  return (sums[num] = sum + 1);
}
