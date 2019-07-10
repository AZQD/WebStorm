var fs = require('fs');

var FILE_NAME = 'Happiness.txt';
var LENGTH = 2 * 1024;  //buffer

var stream = fs.ReadStream(FILE_NAME);
stream.setEncoding('utf8');

//console.log(FILE_NAME);
//console.log(stream);
//console.log(fs.ReadStream);

var buf = new Buffer(LENGTH);
buf.fill(0);
console.log(buf);

stream.on('open',function(){
    console.log('opend');
});
stream.on('data',function(chuck){
    console.log('-------read data---------');
    buf += chuck;
});
stream.on('end',function(){
    console.log('all the data is ready');
    console.log(buf);
});
stream.on('close',function(){
    console.log('closed');
});
stream.on('error',function(err){
    console.error(err);
});