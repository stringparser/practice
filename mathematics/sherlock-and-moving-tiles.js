'use strict';

var input = '';
process.stdin.resume();
process.stdin.on('data', function(data){
  input += data || '';
});

process.stdin.on('end', function(){
  input = input.match(/[+-]?\d+/g).map(Number);
  var l = input[0];
  var vx = Math.abs(input[2]-input[1])/Math.sqrt(2);
  input.slice(4, 4 + input[3]).forEach(function(q){
    var qx = l - Math.sqrt(q);
    console.log(qx/vx);
  });
});
