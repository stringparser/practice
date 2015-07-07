'use strict';

var tests = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(data){
  tests += data;
});

process.stdin.on('end', function(){
  tests = tests.trim().split(/\n|[ ]+/g);
  var n = Number(tests[0]);
  if(!n){ return ; }
  var ints = {};
  tests.slice(1, n + 1).forEach(function(num){
    if(ints[num]){ delete ints[num]; return ; }
    ints[num] = true;
  });
  console.log(Object.keys(ints)[0]);
});
