'use strict';

var input = '';

process.stdin.setEncoding('utf8');
process.stdin.on('data', function(data){
  input += data;
});

process.stdin.on('end', function(){
  var dates = input.match(/[^\n]+/g).join(' ').trim()
    .split(/[ ]+/).map(Number);

  var fine = 0;
  if(dates[2] !== dates[5]){
    fine = dates[2] > dates[5] ? 10000 : 0;
  } else if(dates[1] !== dates[4]){
    fine = Math.max(dates[1] - dates[4], 0) * 500;
  } else {
    fine = Math.max(dates[0] - dates[3], 0) * 15;
  }

  console.log(fine);
});
