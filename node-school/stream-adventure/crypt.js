'use strict';

var crypto = require('crypto');

var pass = process.argv[2];
var decipher = crypto.createDecipher('aes256', pass);

process.stdin
  .pipe(decipher)
  .pipe(process.stdout);
