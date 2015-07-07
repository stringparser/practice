'use strict';

function processData(input) {
  input = input.trim().split('\n');
  var n = Number(input[0]);
  var k = Number(input[2]) % 26;

  input[1] = input[1].replace(/[A-Za-z]/g, function(str, index){
    if(index >= n){ return str; }
    index = str.charCodeAt(0) + k;
    if(index > 122 && str >= 'a' && str <= 'z'){
      index = 96 + (index % 122);
    } else if(index > 90 && str >= 'A' && str <= 'Z'){
      index = 64 + (index % 90);
    }
    return String.fromCharCode(index);
  });

  console.log(input[1]);
}

process.stdin.resume();
process.stdin.setEncoding('utf8');

var _input = '';
process.stdin.on('data', function (data) {
    _input += data;
});

process.stdin.on('end', function () {
   processData(_input);
});
