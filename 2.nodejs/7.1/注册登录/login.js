/**
 * Created by Administrator on 2016/7/1.
 */
var http=require("http");
var url=require("url");

var pageLogin='<!DOCTYPE html>\
    <html lang="en">\
    <head>\
    <meta charset="UTF-8">\
    <title>Title</title>\
    </head>\
    <body>\
    <!--login 注册-->\
<form method="post" action="http://127.0.0.1:3000/login">\
    <label for="useName">useName:</label>\
<input type="text" id="useName" name="useName"><br/>\
    <label for="password">password:</label>\
<input type="text" id="password" name="password"><br/>\
    <input type="submit" value="submit">\
    </form>\
    </body>\
    </html>';


var server=http.createServer(requestHandler);

server.listen(3000,function(){
    console.log("服务器运行");
});

function requestHandler(req,res){
    //req,http.incomingMessage
    //res,http.response

    var urlStr=req.url;
    var urlObj=url.parse(urlStr,true);
    var pathName=urlObj.pathname;
    var method=req.method;

    //console.log(urlObj);
    //console.log(pathName);
    /*if("/favicon.ico"==urlObj.pathname){
        //return;
    }else if("/"==pathName){
        console.log('index page');
    }else if("/login"==pathName){
        console.log("login info");
    }else {
        console.log("404");
        res.writeHead(404,"not found");
        res.end("404 not found");
    }*/
    switch(pathName){
        case "/favicon.ico":
            break;//如果没有，break
        case "/":
           // break;
        case "/login":
            if("GET"==method){
                //console.log(method);
                res.end(pageLogin);
            }else if("POST"==method){
                res.writeHead(200,"success",{
                    "content-type":"text/plain;charset=utf8"
                });
                res.end("中国");

            }

            //res.end(pageLogin);
            break;
        default:
            //console.log(pathName);
            console.log(404);
            res.end("404 not found");
    }

}