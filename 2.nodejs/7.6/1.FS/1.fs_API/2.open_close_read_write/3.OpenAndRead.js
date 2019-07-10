var fs = require('fs');


//r ：以读取模式打开文件。
//r+ ：以读写模式打开文件。
//w ：以写入模式打开文件，如果文件不存在则创建。
//w+ ：以读写模式打开文件，如果文件不存在则创建。
//a ：以追加模式打开文件，如果文件不存在则创建。
//a+ ：以读取追加模式打开文件，如果文件不存在则创建。
var control = ['r', 'r+', 'w', 'w+', 'a', 'a+'];

//fd
//0:stdin
//1:stdout
//2:stderr
fs.open('content.txt', control[0], function(err, fd) {
    if (err) {
        console.error(err);
        return;
    }
    console.log('fd: ', fd);
    var buf = new Buffer(8);
    fs.read(fd, buf, 0, 8, null, function(err, bytesRead, buffer) {
        if (err) {
            console.error(err);
            return;
        }
        console.log('bytesRead: ' + bytesRead);
        console.log(buffer);
        fs.close(fd);
    })
});