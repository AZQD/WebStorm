var fs = require('fs');

var FILE_NAME = './content.txt';
//fd文件描述符是一个非负整数，
// 表示操作系统内核为当前进程所维护的打开文件的记录表索引。
fs.open(FILE_NAME, 'r', function(err, fd){
    if(err){
        console.error(err);
        console.trace('出现错误啦，亲'+fd);
    }else{
        console.log('正常打开, fd = '+fd);
    }

    //关闭和打开代码有不同的效果
    fs.close(fd, function(err){
        if(err){
            console.error(err);
            console.trace('出现错误啦，亲'+fd);
        }
    });
});

//另外，注意多次嵌套打开，需要将两个close都写在内部。