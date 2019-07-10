//可写流 （和流动模式配合, 可以暂停）
//pause暂停 和 resume重新开始 配合
var fs = require('fs');

var stream = fs.createReadStream('alibaba.txt');
var newStream = fs.createWriteStream('2.txt');

//Event: 'error'
//Event: 'finish'
//Event: 'pipe'
//Event: 'unpipe'

stream.on('data', function(chunk){
    var flag = newStream.write(chunk);
    console.log(flag);
// 数据来源速度已经远远大于磁盘写入速度了
//如果数据没有完全写入磁盘，而是驻留到系统内核的缓冲区了，那么就暂停读入数据
    if(!flag){
        stream.pause();
    }
});
stream.on('end', function(){
    newStream.end();
});
//操作系统内核的内存的数据全部都流空了，就会激发'drain'事件
newStream.on('darin', function(){
    //当数据处理完了，那么，就调用 resume 函数， 恢复读取数据
    console.log('流干的时候，重新继续');
    stream.resume();
});

//关于drain也可以参考7.6内容