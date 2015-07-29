'use strict';

var through = require('through2');

var stream = function transform(){
  function write(chunk, enc, next){
    //jshint validthis: true
    this.push(chunk.toString('utf8').toUpperCase());
    next();
  }

  function end(done){
    done();
  }

  return through(write, end);
};

process.stdin
  .pipe(stream())
  .pipe(process.stdout);
