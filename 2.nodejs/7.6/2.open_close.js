
var fs = require('fs');
var FILE_NAME ='content.txt';
var FILE_NAME_W ='content_w.txt';

// 多次嵌套打开
fs.open( FILE_NAME, 'r', function (err, fd) {
    //如果发生错误
    if(err){
        console.error(err);
        console.trace('something wrong while open : %s , %d ', FILE_NAME, fd);
    } else {
        console.log('B: ', fd);
        // do something here
        fs.open( FILE_NAME_W, 'w', function (err, fdd) {
            //如果发生错误
            if(err){
                console.error(err);
                console.trace('something wrong while open : %s , %d ', FILE_NAME_W, fdd);
            } else {
                console.log('C: ', fdd);
                // do something here

                fs.close(fdd, function (err) {
                    if(err){
                        console.error(err);
                        console.trace('something wrong while close : %s , %d ', FILE_NAME_W, fdd);
                    }
                });
            }
        });

        fs.close(fd, function (err) {
            if(err){
                console.error(err);
                console.trace('something wrong while close : %s , %d ', FILE_NAME, fd);
            }
        });
    }
});



