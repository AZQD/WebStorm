/**
 * Created by Administrator on 2016/6/28.
 */
var http=require("http");
var url=require("url");
http.createServer(function(req,res){
    var urlStr=req.url;
    var urlObj=url.parse(urlStr,true);
    var a=urlObj.query.a;
    var b=urlObj.query.b;
    a=Number.parseInt(a);
    b=Number.parseInt(b);
    var result=a+b;
    result=result.toString();
    console.log(urlObj);

    //var result=urlObj.pathname.toString();
    //console.log(typeof result);
    //console.log(result);
    //var result=urlObj.toString();
    //console.log(urlObj.pathname);
    //res.end(result);

}).listen(3000);