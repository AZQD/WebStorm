/**
 * Created by Administrator on 2016/7/2.
 */
var http=require("http");
var url=require("url");
var business=require("./lib/business.js");
var fs=require('fs');
var server=http.createServer(requestHandler);
server.listen(3000, function () {
    console.log("server start work");
});
function requestHandler(req,res){
    var urlStr=req.url;
    var urlObj=url.parse(urlStr,true);
    var pathName=urlObj.pathname;
    var method=req.method;
    //console.log(pathName);
    switch (pathName){
      case "/favicon.ico":
            break;
        case "/":
        case "/register":
            //console.log("register");
            if("GET"==method){

                business.register_get(req,res);

            }else if("POST"==method){

                business.register_post(req,res);
            }
            break;

        case "/login":
            if("GET"==method){

                business.login_get(req,res);

            }else if("POST"==method){

                business.login_post(req,res);
            }
            break;
        default:
            res.writeHead(404,"not found");
            res.end("404 not found");
    }
}



