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
    var path=urlObj.pathname;
    //console.log(path);
    a=Number.parseInt(a);
    b=Number.parseInt(b);
    var result=0;
    switch (path){
        case "/":
            console.log("happy");
            break;
        case "/favicon.ico":
            break;
        case "/add":
            result=a+b;
            result=result.toString();
            res.end(result);
            break;
        case "/subtract":
            result=a-b;
            result=result.toString();
            res.end(result);
            break;
        case '/multiply':
            result = a * b;
            result=result.toString();
            res.end(result);
            break;
        case '/divide':
            result = a / b;
            result=result.toString();
            res.end(result);
            break;
        default:
            console.error("can't find right pathname !");
    }
}).listen(3000);