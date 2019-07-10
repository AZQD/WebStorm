var fs = require('fs');

//全部写入
fs.open('content_w.txt', 'w+', function(err, fd) {
    if (err) {
        console.error(err);
        return;
    }
    console.log('fd: ', fd);
    var buf = new Buffer('呆！妖怪！');
    fs.write(fd, buf, 0, buf.length, null, function(err, bytesRead, buffer) {
        if (err) {
            console.error(err);
            return;
        }
        console.log('bytesRead: ' + bytesRead);
        console.log(buffer);
    })
});
