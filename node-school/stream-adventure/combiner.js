'use strict';

var zlib = require('zlib');
var split = require('split');
var through = require('through2');
var combiner = require('stream-combiner');

module.exports = function(){

  var genre = {};
  var current;

  function write(data, enc, next){
    if(!data.length){ return next(); }

    var json = JSON.parse(data);
    var name = json.name;
    var type = json.type;

    if(type === 'genre' && !genre[name]){
      current = name;
      genre[name] = [];
    } else if(type === 'book'){
      genre[current].push(name);
    }

    next();
  }

  function end(done){
    //jshint validthis: true
    Object.keys(genre)
      .map(function(type){
        return ({name: type, books: genre[type]});
      }).forEach(function(type){
        return this.push(JSON.stringify(type) + '\n');
      }, this);

    done();
  }

  return combiner(
    split(),
    through.obj(write, end),
    zlib.createGzip()
  );
};
