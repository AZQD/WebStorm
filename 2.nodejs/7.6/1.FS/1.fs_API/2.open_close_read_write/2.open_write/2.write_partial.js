var fs = require('fs');



// 1.只写入 妖怪 两个字
// 2.再写入 呆！
fs.open('content_w.txt', 'w+', function(err, fd) {
    if (err) {
        console.error(err);
        return;
    }
    console.log('fd: ', fd);
    var buf = new Buffer('呆！妖怪！');
    //position 如果为 null 的话，系统自动维护其位置
    fs.write(fd, buf, 6, 6, null, function(err, bytesRead, buffer) {
        if (err) {
            console.error(err);
            return;
        }
        console.log('bytesRead: ' + bytesRead);
        console.log(buffer);
    });
    fs.write(fd, buf, 0, 6, null, function(err, bytesRead, buffer) {
        if (err) {
            console.error(err);
            return;
        }
        console.log('bytesRead: ' + bytesRead);
        console.log(buffer);
    });
});
