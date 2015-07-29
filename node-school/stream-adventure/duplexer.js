'use strict';

var cp = require('child_process');
var duplexer = require('duplexer2');

module.exports = function childDuplexer(cmd, args){
  var sp = cp.spawn(cmd, args);
  return duplexer(sp.stdin, sp.stdout);
};
