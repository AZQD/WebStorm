/**
 * Created by Administrator on 2016/7/1.
 */
var http=require("http");

http.createServer(function(req,res){
    var method=req.method;
    var url=req.url;

    if("/login"==req.url && "POST"==method){
        var data="";
        req.on("data",function(thunk){
            data+=thunk;
        });
        req.on("end",function(){
            console.log(data);
            data=decodeURIComponent(data);
            console.log(data);
            res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
            res.end(data);
        });
    }

}).listen(3000, function () {
    console.log("server start listening");
});