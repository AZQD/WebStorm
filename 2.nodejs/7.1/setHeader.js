/**
 * Created by Administrator on 2016/7/1.
 */
var http=require("http");

http.createServer(function(req,res){
    res.setHeader("content-type","text/plain;charset=utf8");
    res.setHeader("set-cookie",["weapon=jinGuBang"]);
    res.end("美猴王");
}).listen(3000,function(){
    console.log("server start listening");
});