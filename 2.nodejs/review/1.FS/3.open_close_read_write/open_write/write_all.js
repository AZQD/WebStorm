var fs = require('fs');
fs.open('content.txt', 'w+', function(err, fd){
    if(err){
        console.error(err);
        return;
    }
    console.log('fd = '+ fd);
    var buf = new Buffer('煮酒论英雄');
    //bytesRead 读取字节长度
    fs.write( fd, buf, 0, buf.length, null, function(err, bytesRead,buffer){
        if(err){
            console.error(err);
            return;
        }
        console.log('bytesRead ='+ bytesRead);
        console.log(buf.toString());
    });

});

//这个是读取所有文件，也可以读取部分文件，可以看7.6文件参考。