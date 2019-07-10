var fs = require('fs');


//r ：以读取模式打开文件。
//r+ ：以读写模式打开文件。
//w ：以写入模式打开文件，如果文件不存在则创建。
//w+ ：以读写模式打开文件，如果文件不存在则创建。
//a ：以追加模式打开文件，如果文件不存在则创建。
//a+ ：以读取追加模式打开文件，如果文件不存在则创建。
var control =['r', 'r+', 'w', '+w', 'a', '+a'];

//fd
//0:stdin
//1:stdout
//2:stderr


fs.open('shuihu.txt', control[0], function(err, fd){
    if(err){
        console.error(err);
    }else{
        console.log('fd = '+ fd);
        var buf = new Buffer(6);
        buf.fill(0);
        fs.read(fd, buf, 0, 6, null, function(err, bytesRead, buffer){
            if(err){
                console.error(err);
            }else{
                console.log('bytesRead = '+ bytesRead);
                console.log(buf.toString());
                fs.close(fd);
            }
        });
    }
});