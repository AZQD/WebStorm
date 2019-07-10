/**
 * Created by Administrator on 2016/7/1.
 */

var http=require("http");
var url=require("url");

http.createServer(function(req,res){
    var urlStr=req.url;
    var urlObj=url.parse(urlStr,true);
    if("/favicon.ico"==urlObj.pathname){
        return;
    }
    res.setHeader("content-type","text/plain;charset=utf8");
    res.setHeader("set-cookie",["address=huaGuoShan"]);
    res.end("七十二变");
}).listen(3000,function(){
    console.log("server start listening");
});