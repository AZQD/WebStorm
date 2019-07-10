
//同步读取文件
//引入
var fs = require('fs');
/*
//同步读取， 函数的返回值携带读取回来的内容，默认是 buffer 类型
var data = fs.readFileSync('content.txt');
console.log(data);
console.log(data.toString());*/

// 设置编码格式 函数的返回值携带读取回来的内容，由于设置了编码格式，相当于告诉系统两个信息：
// 1.程序员需要的返回值是 string 类型
// 2.程序员需要这个string的编码格式是...
//var data = fs.readFileSync('content.txt', 'utf8');  //utr8 编码格式
//console.log(data);
//
//var data = fs.readFileSync('content.txt', 'hex');   //16进制 编码格式
//console.log(data);


// 错误处理
// 与异步处理不同， 错误直接以抛异常的方式给出
// 程序员必须使用 try catch 语句才能接收处理 这些异常
// 此处 '红楼梦.txt' 文件不存在
try {
    var data = fs.readFileSync('红楼梦.txt', 'utf8');
    console.log(data);
} catch (err) {
    console.error(err);
    console.trace( 'readFileSync 出错了' );
}

//var data = fs.readFileSync('红楼梦.txt', 'utf8');
console.log('aaa');