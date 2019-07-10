
var fs = require('fs');
var BUFFER_SIZE = 8 * 1024; // 8k

function copyFile(srcPath, destPath){
    var readStream = fs.createReadStream(srcFile);
    var writeStream = fs.createWriteStream(destFile);
    //使用管道的方式读取并且写入
    readStream.pipe(writeStream);
}

var srcFile = 'GoToWest.txt';
var destFile = 'GoToWest_w.txt';
copyFile(srcFile, destFile);