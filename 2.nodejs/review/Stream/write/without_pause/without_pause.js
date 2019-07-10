
//可写流 （和流动模式配合, 不暂停）
var fs = require('fs');


var stream = fs.createReadStream('tengxun.txt',{highWaterMark: 1 * 1024});
var newStream = fs.createWriteStream('1.txt');

//Event: 'error'
//Event: 'finish'
//Event: 'pipe'
//Event: 'unpipe'
/**
 * 就像是喂饭。一个喂饭一个吃饭。
 * 当喂饭速度太快了，已经吃的满嘴都是了，那么，喂饭的人不能再继续往里塞了。应该停下来等着。
 * 当嘴里已经吃掉了，那么，在继续喂。
 */
stream.on('data', function(chunk){   //流动模式
    var flag = newStream.write(chunk);
    console.log(flag);
});
stream.on('end',function(){
    newStream.end();
    //console.log(newStream);
});