'use strict';

var http = require('http');

var req = http.request({
  port: 8099,
  method: 'POST'
}, function(res){
  res.pipe(process.stdout);
});

process.stdin.pipe(req);
