'use strict';

var tar = require('tar');
var zlib = require('zlib');
var crypto = require('crypto');
var through = require('through2');

var tarser = tar.Parse();

tarser.on('entry', function(entry){
  if(entry.type !== 'File'){ return ; }

  var hs = crypto.createHash('md5', {
    encoding: 'hex'
  });

  entry.pipe(hs).pipe(through(function(hash, _, next){
    console.log('%s %s', hash.toString(), entry.path);
    next();
  }));
});

var pass = process.argv[3];
var cipher = process.argv[2];

process.stdin
  .pipe(crypto.createDecipher(cipher, pass))
  .pipe(zlib.createGunzip())
  .pipe(tarser);
