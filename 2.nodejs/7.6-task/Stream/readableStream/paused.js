var fs = require('fs');

var FILE_NAME = 'Happiness.txt';
var LENGTH = 2 * 1024;

var stream = fs.ReadStream(FILE_NAME);
stream.setEncoding('utf8');

var buf = new Buffer(LENGTH);
buf.fill(0);

stream.on('open',function(){
    console.log('opend');
});
stream.on('readable',function(){
    do{
        var chunk=stream.read();  //真实的读取
        console.log(chunk);
        console.log('+++++++++++++++++++++++++++');
        buf += chunk;
    }while (chunk);
});

stream.on('end',function(){
    console.log('读取完成');
});
stream.on('close',function(){
    console.log('关闭');
});
stream.on('error',function(err){
    console.error(err);
});