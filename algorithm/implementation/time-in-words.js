'use strict';

var input = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(data){
  input += data || '';
});

var words = [null,
  'one', 'two', 'three', 'four', 'five',
  'six', 'seven', 'eight', 'nine', 'ten',
  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
  'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'
];

process.stdin.on('end', function(){
  var time = input.trim().split('\n').map(Number);
  var past = time[1] <= 30;

  if(!past){
    time[0] += 1;
    time[1] = 60 - time[1];
  }

  if(!time[1]){
    console.log(words[time[0]], 'o\' clock');
  } else if(/15|45/.test(time[1])){
    console.log('quarter %s %s',
      past ? 'past' : 'to',
      words[time[0]]
    );
  } else if(time[1] !== 30){
    console.log('%s minute%s %s %s',
      words[time[1]] || 'twenty ' + words[Number(time[1].toString()[1])],
      time[1] > 1 ? 's' : '',
      past ? 'past' : 'to',
      words[time[0]]
    );
  } else {
    console.log('half past', words[time[0]]);
  }
});
