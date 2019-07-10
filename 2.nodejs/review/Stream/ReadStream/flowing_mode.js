//可读流的流动模式：
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

// flowing mode     流动模式
// 当发生 'data' 事件后，执行相应的回调函数，通常这个函数都是用来收集数据的
// 如果需要处理的数据量大的时候，因为每次都只能发送一段数据，所以 data 数据会被触发多次
stream.on('data', function(chunk){
    //  发生了多次
    console.log('********读取数据***********');
    buf += chunk;
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