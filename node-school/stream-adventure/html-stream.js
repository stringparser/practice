'use strict';

var trumpet = require('trumpet');
var through = require('through2');

var tr = trumpet();

process.stdin.pipe(tr).pipe(process.stdout);

var stream = tr.select('.loud').createStream();

stream.pipe(through(function(buff, enc, next){
  stream.write(buff.toString().toUpperCase());
  next();
}));
