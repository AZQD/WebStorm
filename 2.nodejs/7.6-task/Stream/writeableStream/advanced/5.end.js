var fs = require('fs');

var writeableSream = fs.createWriteStream('outTxt2.txt');

writeableSream.on('darin',function(){
    console.log('缓冲区的数据全部清空');
});

var STR = "你好\n";

writeableSream.write(STR);
writeableSream.end();