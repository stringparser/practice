'use strict';

var http = require('http');
var through = require('through2');

var server = http.createServer(function(req, res){

  if(req.method === 'POST'){
    req.pipe(through(function(buff, enc, next){
      this.push(buff.toString().toUpperCase());
      next();
    }, function end(done){
      done();
    })).pipe(res);
  } else {
    res.end();
  }
});

server.listen(Number(process.argv[2]));
