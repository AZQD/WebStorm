
var fs = require('fs');
var BUFFER_SIZE = 8 * 1024; // 8k

function copyFile(srcPath, destPath){
    // 建立缓存区
    var buf = new Buffer(BUFFER_SIZE);
    // 打开源文件，并记录 fd     //同步方式
    var srcFd = fs.openSync(srcPath, 'r');
    // 打开目标文件，并记录 fd    //同步方式
    var destFd = fs.openSync(destPath, 'w');

    //逻辑：一旦读到的字节数少于 bufferSize 那么就是文件被读完了
    //解释：读取文件（本示例中每次读取 8K），每次读取的量应该和指定的 BUFFER_SIZE 大小相同。
    //      如果，一旦发生某次读取的量小于 BUFFER_SIZE ，
    //          那么，说明所有的数据都已经取结束，已经没有新的数据可以读取了
    try {
        do {
            // 读取
            var bytesRead = fs.readSync(srcFd, buf, 0, BUFFER_SIZE, null);
            // 写入
            fs.writeSync(destFd, buf, 0, BUFFER_SIZE, null);
        }
        while (bytesRead == BUFFER_SIZE);
        // 关闭文件
        fs.close(srcFd);
        fs.close(destFd);
    } catch (e) {
        console.error(e);
        console.trace('copyFile error');
    }
}

var srcFile = 'GoToWest.txt';
var destFile = 'GoToWest_w.txt';
copyFile(srcFile, destFile);