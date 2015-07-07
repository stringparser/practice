'use strict';

function processData(input) {
  var fac = input;
  while(--input){
    fac = fac*input;
  }

  fac = fac.toString();
  var zeros = fac.match(/\.([0-9]+)e\+([0-9]+)/);
  if(!zeros){ return console.log(fac); }
  zeros[2] = Number(zeros[2]) - zeros[1].length;
  fac = fac.replace('.', '').replace(/e.+/, '');
  process.stdout.write(fac);
  while(--zeros[2]){
    process.stdout.write('0');
  }
  process.stdout.write('\n');
}

process.stdin.resume();
process.stdin.setEncoding('ascii');

var _input = '';
process.stdin.on('data', function (input) {
    _input += input;
});

process.stdin.on('end', function () {
   processData(Number(_input.trim()));
});
