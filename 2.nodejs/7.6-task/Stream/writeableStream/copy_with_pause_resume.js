var fs = require('fs');
var readableStream = fs.createReadStream('XiYouJi.txt');
var writeableStream = fs.createWriteStream('outFile.txt');

readableStream.on('data',function(chunk){
    var flag = writeableStream.write(chunk);
    console.log(flag);
    if(!flag){
        readableStream.pause();
    }
});
readableStream.on('end',function(){
    writeableStream.end();
    console.log('jieshu');
});

writeableStream.on('drain',function(){
    console.log('drain');
    readableStream.resume();
});

