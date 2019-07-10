/**
 * Created by Administrator on 2016/7/1.
 */
var http=require("http");

var server=http.createServer(function(req,res){
    res.end("hello world");
}).listen(3000,function(){
    console.log("服务器开始监听");
});

server.timeout=6*1000;

setTimeout(function(){
    server.close(function(){
        console.log("服务器关闭");
    });
},15*1000);