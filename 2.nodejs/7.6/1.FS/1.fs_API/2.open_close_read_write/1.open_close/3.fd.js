
//之所以要把打开的文件关闭有两个原因：
//  1.如果用完不关闭，那么，别的程序不能用（比如，剪切，删除等操作无法进行）
//  2.如果用完不关闭，那么，当前进程的 fd 可能很快就会消耗殆尽
//      fd 是宝贵的资源数量是有限的。假设，我们每次服务都打开一个文件，并且不关闭，再假设，我们的服务器程序是给大量用户服务，那么，很快 fd 就会用光
var fs = require('fs');
var FILE_NAME ='content.txt';
var FILE_NAME_W ='content_w.txt';



//fd
//0:stdin
//1:stdout
//2:stderr

// 测试fd能有多少
function testFD(){
    fs.open( FILE_NAME, 'r', function (err, fd) {
        if (err) {
            console.error(err);
            console.trace('something wrong while open : %s , %d ', FILE_NAME, fd);
            process.exit(1);
        } else {
            console.log(fd);
        }
    });
}
setInterval(testFD, 0.01 * 1000);
