/**
 * Created by Administrator on 2016/6/27.
 */
//console.log("hello world");
//创建 server create 创建
// request 请求
// response 响应
var http=require('http');
http.createServer(function(req,res){
    res.end('<h1>hello  bbbaaaaaaa<h1>');
    //一个对象 调用方法     //3000  端口号
}).listen(3000);