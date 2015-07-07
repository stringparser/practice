'use strict';

var tests = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(data){
  tests += data;
});

var top = Math.pow(2, 32) + 1;
process.stdin.on('end', function(){
  tests = tests.trim().split(/\n/);
  var n = Number(tests[0]);
  if(!n || n > 100){ return ; }
  tests.slice(1, n + 1).forEach(function(num){
    num = Number(num);
    if(num > top){ return ; }
    var bin = toFlipped32Bin(num);
    console.log(parseInt(bin, 2));
  });
});

function toFlipped32Bin(num){
  var str = (num >>> 0).toString(2);
  var zeros = new Array(32 - str.length + 1).join(' ').replace(/[ ]/, '0');
  return (zeros + str).split('').map(function(bit){
    return Number(bit) ? '0' : '1';
  }).join('');
}
