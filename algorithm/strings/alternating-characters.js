'use strict';

var input = '';
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(data){
  input += data || '';
});

var cached = {};
process.stdin.on('end', function(){
  input = input.trim().toUpperCase().split('\n');
  input.slice(1, Number(input[0]) + 1).forEach(function(str){
    if(cached[str]){ return console.log(cached[str]); }
    var ab = (str.match(/(?:A(?:B|$))+/ig) || [' ']);
    var ba = (str.match(/(?:B(?:A|$))+/ig) || [' ']);
    cached[str] = str.length - Math.max(ab.join('').length, ba.join('').length);
    console.log(cached[str]);
  });
});
