'use strict';

var through = require('through2');
var duplexer = require('duplexer2');

module.exports = function duplexRedux(counter){
  var rs = through.obj(write, end);
  var redux = {};

  function write(json, enc, next){
    var country = json.country;
    redux[country] = (redux[country] + 1 || 1);
    next();
  }

  function end(done){
    counter.setCounts(redux);
    done();
  }

  return duplexer(rs, counter);
};
