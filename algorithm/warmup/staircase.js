'use strict';

var blanks, steps = 1;

process.stdin.setEncoding('utf8');

process.stdin.on('data', function (input) {
 blanks = Number(input.trim()) + 1;
});

process.stdin.on('end', function () {
  while(--blanks){
    console.log('%s%s',
      new Array(blanks).join(' '),
      new Array(++steps).join('#')
    );
  }
});
