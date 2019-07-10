var fs = require('fs');

var readableStream = fs.createReadStream('../XiYouJi.txt');
var writeableStream = fs.createWriteStream('outTxt.txt');

var STR = '好姑娘，真漂亮\n';

for(var i=0; i<1000; i++){
    var flag = writeableStream.write(STR);
    console.log(flag);
}
writeableStream.on('drain',function(){
    console.log('缓冲区的数据全部清空');
});