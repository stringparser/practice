'use strict';

var tests = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(data){
  tests += data;
});

function isFunny(str, len){
  var index = 0, fun = true;
  while(fun && ++index < len){
    fun = !Boolean(
      Math.abs(str.charCodeAt(index) - str.charCodeAt(index-1)) -
      Math.abs(str.charCodeAt(len-index) - str.charCodeAt(len-index-1))
    );
  }
  return fun;
}

process.stdin.on('end', function(){
  tests = tests.trim().split('\n');
  var n = Number(tests[0]);
  if(!n){ return ; }
  tests.slice(1, n + 1).forEach(function(str){
    var len = str.length;
    if(len > 1 && len < 10001 && isFunny(str, len)){
      console.log('Funny');
    } else { console.log('Not Funny'); }
  });
});
