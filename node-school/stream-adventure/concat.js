'use strict';

var concat = require('concat-stream');

process.stdin.pipe(concat(function(buff){
  console.log(
    buff.toString().split('').reverse().join('')
  );
}));
