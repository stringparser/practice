'use strict';

// see
// https://en.wikipedia.org/wiki/Permutation#Generation_in_lexicographic_order

process.stdin.setEncoding('utf8');

var input = '';
process.stdin.on('data', function(data){
  input += data;
});

process.stdin.on('end', function(){
  input = input.trim().split('\n');
  var n = Number(input[0]);
  input.slice(1, n + 1).forEach(function(word){
    // Find non-increasing suffix
    var i = word.length - 1;
    while (i > 0 && word[i - 1] >= word[i]){ i--; }
    if (i <= 0){ return console.log('no answer'); }

    // Find successor to pivot
    var j = word.length - 1;
    while (word[j] <= word[i - 1]){ j--; }

    var temp = word[i - 1];
    word[i - 1] = word[j];
    word[j] = temp;

    // Reverse suffix
    j = word.length - 1;
    while (i < j) {
      temp = word[i];
      word[i] = word[j];
      word[j] = temp;
      i++;
      j--;
    }
  });
});
