
var fs = require('fs');
var FILE_NAME ='content.txt';
var FILE_NAME_W ='content_w.txt';

// 打开与关闭
// r - read
fs.open( FILE_NAME, 'r', function (err, fd) {
    //检测err
    if(err){
       console.error(err);
       console.trace('something wrong while open : %s , %d ', FILE_NAME, fd);
    } else {
        console.log('A: ', fd);
        // do something here

        //关闭和打开代码有不同的效果
        fs.close(fd, function (err) {
            if(err){
                console.error(err);
                console.trace('something wrong while close : %s , %d ', FILE_NAME, fd);
            }
        });
    }
});
