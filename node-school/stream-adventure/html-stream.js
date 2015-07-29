'use strict';

var trumpet = require('trumpet');
var through = require('through2');

var tr = trumpet();

process.stdin.pipe(tr).pipe(process.stdout);

var ws = tr.select('.loud').createStream();

var transform = function(){
  return through(function(buff, enc, next){
    this.push(buff.toString().toUpperCase());
    next();
  });
};

ws.pipe(transform()).pipe(ws);
