// 所谓的剪切文件，事实上就是首先将文件拷贝到一个位置
// 然后，把旧的文件删除掉

var fs = require('fs');
var BUFFER_SIZE = 8 * 1024; // 8k

function copyFile(srcPath, destPath){
    // 建立缓存区
    var buf = new Buffer(BUFFER_SIZE);
    // 打开源文件，并记录 fd
    var srcFd = fs.openSync(srcPath, 'r');
    // 打开目标文件，并记录 fd
    var destFd = fs.openSync(destPath, 'w');

    try { // 一旦读到的字节数少于 bufferSize 那么就是文件被读完了
        do {
            // 读取
            var bytesRead = fs.readSync(srcFd, buf, 0, BUFFER_SIZE, null);
            // 写入
            fs.writeSync(destFd, buf, 0, BUFFER_SIZE, null);
        }
        while (bytesRead == BUFFER_SIZE);
        // 关闭文件
        fs.closeSync(srcFd);
        fs.closeSync(destFd);
    } catch (e) {
        console.error(e);
        console.trace('copyFile error');
    }
}

//业务逻辑函数
function cutFile(srcPath, destPath) {
    try {
        // 1.拷贝文件
        copyFile(srcPath, destPath);
        // 2.删除文件
        fs.unlinkSync(srcPath);
    } catch (e) {
        console.error(e);
        console.trace('cutFile error');
    }
}

var srcFile = 'GoToWest_w.txt';
//将新的文件重新剪切到当前文件夹，并且重新命名了
var destFile = 'GoToWest_cut.txt';
cutFile(srcFile, destFile);