'use strict';

/*
  we'll check if every letter
  from a to z is on the sentence using charCodeAt
  so we'll go through the whole sentence and remove the letter
  at the end the sentence will be trimmed and if has no length
  we have a pangram
*/

var input = '';

process.stdin.setEncoding('utf8');
process.stdin.on('data', function(data){
  input += data;
});

process.stdin.on('end', function(){
  var end = 'z'.charCodeAt(0) + 1;
  var start = 'a'.charCodeAt(0);
  var scanner = end;

  for(var index = start; index < end; ++index){
    var re = new RegExp(String.fromCharCode(index), 'i');
    if(re.test(input)){ --scanner; }
  }

  if(scanner === start){
    return console.log('pangram');
  }
  console.log('not pangram');
});
