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
    var operation=urlObj.query.op;
    a=Number.parseInt(a);
    b=Number.parseInt(b);
    var result=0;
    if("/favicon.ico"==urlObj.pathname){
        return;
    }
    switch(operation){
        case "add":
            result=a+b;
            break;
        case "subtract":
            result=a-b;
            break;
        case "multiply":
            result=a*b;
            break;
        case "divide":
            result=a/b;
            break;
        default:
            console.error("op is wrong");
    }
    result=result.toString();
    res.end(result);
}).listen(3000);