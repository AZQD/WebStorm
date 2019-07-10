//可读流的非流动模式（暂停模式）：
var fs = require('fs');

var FILE_NAME = './baidu.txt';
var LENGTH = 2 * 1024;  //buffer 申请的空间


/**
 * 可读流的标准事件
 Event: 'close'
 Event: 'data'
 Event: 'end'
 Event: 'error'
 Event: 'readable'
 * fs.ReadStream 自己实现一个事件
 Event: 'open'
 */


var stream = fs.createReadStream(FILE_NAME);
//console.log(stream);
stream.setEncoding('utf8');

var buf = new Buffer(LENGTH);

buf.fill(0);  //初始化，填充0
console.log(buf);

stream.on('open', function(){
    console.log('打开');
});

// paused mode  暂停模式
//当 'readable'事件发生，相当于系统通知程序员，现在可以读取数据了
stream.on('readable', function(){
    console.log('********读取数据***********');
    //do while 语法
    do{
        //这里真实的去读取， 将读取回来的数据 赋值给变量 chunk
        var chunk = stream.read();
        //console.log(chunk);
        buf += chunk;//只要 chunk 还有数据，那么就可以继续读取的循环
    }
    while(chunk);
});
stream.on('end', function(){
    console.log('数据读取完了');
    console.log(buf);
});
stream.on('close', function(){
    console.log('关闭');  //流关闭
});
stream.on('error', function(err){
    console.error(err);
});