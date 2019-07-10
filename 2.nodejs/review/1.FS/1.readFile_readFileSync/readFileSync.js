/**
 * Created by Administrator on 2016/7/8.
 */
//读文件fs.readFileSync 同步方式
var fs = require('fs');
var http = require('http');

//http.createServer(function(req,res){
//
//    //这样可以看到req和res里面的内容，是一个Object
//    //而且res只能打印string和buffer类型。
//    //res.end(req);
//
//    //函数的返回值携带读取回来的内容, 所以可以返回给abc
//    //想转换为string类型，可以在下面加'utf8'，还可以在下面用toSting();
//    var abc = fs.readFileSync('honglou.txt', 'utf8');
//    //或者转换为16进制
//    //var abc = fs.readFileSync('honglou.txt', 'hex');
//    console.log(abc);
//    //console.log(abc.toString());
//
//
//}).listen(3000, function(){
//    console.log('start server work');
//});



//错误处理用try-catch，和readFile有所不同。

try{
    var abc = fs.readFileSync('honglou.txt', 'utf8');
    console.log(abc);
}catch(err){
    console.error(err);
    //console.trace()用来追踪函数的调用轨迹。
    console.trace('readFileSync 出错了');
}