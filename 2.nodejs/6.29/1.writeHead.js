/**
 * Created by Administrator on 2016/6/29.
 */
var http =require("http");

http.createServer(function(req,res){
    var headerObj={
        "content-type":"text/plain;charset=utf8",
        "set-cookie":["name=sunwukong","age=500"]
    };
    res.writeHead(200,"success",headerObj);
    res.end("齐天大圣");
}).listen(3000,function(){
    console.log("server start listening");
});