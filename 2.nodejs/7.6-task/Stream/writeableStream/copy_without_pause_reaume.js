var fs = require('fs');

var inStream = fs.createReadStream('XiYouJi.txt');
var outStream = fs.createWriteStream('out.txt');

inStream.on('data',function(chunk){
    var flag = outStream.write(chunk);
    console.log(flag);
});
inStream.on('end',function(){
    outStream.end();
    //console.log('ends');
});