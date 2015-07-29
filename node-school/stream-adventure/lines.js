'use strict';

var split = require('split');
var through = require('through2');

var stream = function(){
  var count = 1;
  return through(function(line, _, next){
    if(++count % 2){
      line = line.toString().toUpperCase();
    } else {
      line = line.toString().toLowerCase();
    }
    this.push(line + '\n');
    next();
  });
};

process.stdin
  .pipe(split())
  .pipe(stream()).pipe(process.stdout);
