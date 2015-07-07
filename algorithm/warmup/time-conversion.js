'use strict';

process.stdin.setEncoding('utf8');

process.stdin.on('data', function(data){
  if(!data){ return; }
  var match = data.match(/(\d+\:\d+\:\d+)(PM|AM)/);
  var time = match[1].split(':');
  time[0] = Number(time[0]);

  if(match[2] === 'AM'){
    time[0] = (time[0] % 12);
  } else if(time[0] !== 12){
    time[0] = (time[0] + 12);
  }

  if(time[0] < 10){
    time[0] = '0' + time[0];
  }

  console.log(time.join(':'));
});
