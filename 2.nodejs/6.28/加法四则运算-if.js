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
    var result=0;
    if("/favicon.ico"==urlObj.pathname){
        //console.log("abc");
    }else if("/add"==urlObj.pathname){
        result=a+b;
        console.log(result);
        result=result.toString();
        res.end(result);
    }else if("/subtract"==urlObj.pathname){
        result=a-b;
        result=result.toString();
        res.end(result);
    }else if("/multiply"==urlObj.pathname){
        result=a*b;
        result=result.toString();
        res.end(result);
    }else if("/divide"==urlObj.pathname){
        result=a/b;
        result=result.toString();
        res.end(result);
    }
}).listen(3000);