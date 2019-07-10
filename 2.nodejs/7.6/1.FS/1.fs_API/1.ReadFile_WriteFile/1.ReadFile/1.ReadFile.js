/**
 * 读文件
 * 设置 encode
 * 处理 error
 */
//引入
var fs = require('fs');
//console.log(fs);

/*

// 读取出文件的内容     入读的内容按照 buffer 处理   //面对小文件的API
fs.readFile('content.txt', function(err, data) {
    if (err) {
        console.error(err); //变色    标准错误流
    } else {
        console.log(data);
        console.log(data.toString());
    }
});
*/



/*

// 设置编码格式   入读的内容自动转化为 string 类型
fs.readFile('content.txt', 'utf8', function(err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});
*/


// 出现错误
// 水浒传.txt 文件不存在
// 如果我们不进行 err 处理，那么，err 就没有效果了。
// 系统把 err 报告给程序员，程序员来处理 err
// 实验：将 函数体内的代码 注释掉， 观察结果，并且，思考如果不处理错误可能带来的麻烦
fs.readFile('水浒传.txt', 'utf8', function(err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});
console.log('aaa');