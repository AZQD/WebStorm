/**
 * Created by Administrator on 2016/6/28.
 */
var http=require("http");
var url=require("url");
var qs=require("querystring");
var fs=require('fs');

var root='./';

http.createServer(function(req,res){
    var urlStr=req.url;
    var urlObj=url.parse(urlStr,true);

    if("/favicon.ico"==urlObj.pathname){

    }else if("/"==urlObj.pathname){
        console.log("index page");
        //res.end(page);
        var path=root+'post.html';
        fs.readFile(path, function(err,data){
            console.log('abcd');
            res.end(data);
        });
    }else if("/op"==urlObj.pathname){
        var dataStr="";
        req.on("data",function(chunk){
            dataStr+=chunk;
        });
        req.on("end",function(){
            //打印出结果：op=add&a=23&b=234
            console.log(dataStr);
            var queryString=qs.parse(dataStr);

            var a=queryString.a;
            var b=queryString.b;
            var operation=queryString.op;
            a=Number.parseInt(a);
            b=Number.parseInt(b);
            var result=0;
            switch (operation){
                case "add":
                    result=a+b;
                    break;
                case 'subtract':
                    result = a - b;
                    break;
                case 'multiply':
                    result = a * b;
                    break;
                case 'divide':
                    result = a / b;
                    break;
                default:
                    console.error("op is wrong");
            }
            result=result.toString();
            res.end(result);
        });

    }
}).listen(3000);