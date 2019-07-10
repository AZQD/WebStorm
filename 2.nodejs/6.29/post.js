/**
 * Created by Administrator on 2016/6/29.
 */
var http=require("http");
var url=require("url");
var qs=require("querystring"); //用来查询字符串的方法

var page=' <!DOCTYPE html>\
    <html lang="en">\
    <head>\
    <meta charset="UTF-8">\
    <title>add_form_get</title>\
    </head>\
    <body>\
    <form method="post" action="/op">\
    <label for="op">op</label>\
    <select id="op" name="op"  >\
    <option>add</option>\
    <option>subtract</option>\
    <option>multiply</option>\
    <option>divide</option>\
    </select><br>\
    <label for="first">a:</label>\
<input type="text" id="first" name="a" ><br>\
    <label for="second">b:</label>\
<input type="text" id="second" name="b" ><br>\
    <input type="submit" value="submit">\
    </form>\
    </body>\
    </html> ';
//抽取函数
function fourOperation(req,res){
    var dataStr="";
    req.on("data",function(chunk){
        console.log("--------");
        console.log(chunk);  //<Buffer 6f 70 3d 61 64 64 26 61 3d 31 26 62 3d 32>
                                //缓冲区，二进制文件操作
        console.log(typeof chunk); //object
        dataStr+=chunk;
        console.log("--------");
        console.log(dataStr);
        console.log(typeof dataStr);
    });
    req.on("end",function(){
        var queryString=qs.parse(dataStr);
        var a=queryString.a;
        var b=queryString.b;
        var operation=queryString.op;
        a=Number.parseInt(a);
        b=Number.parseInt(b);
        var result=0;
        switch (operation){
            case "add":
                result = a + b;
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

http.createServer(function(req,res){
    var urlStr=req.url;
    var urlObj=url.parse(urlStr,true);
    if("/favicon.ico"==urlObj.pathname){

    }else if("/"==urlObj.pathname){
        console.log('index page');
        res.end(page);
    }else if("/op"==urlObj.pathname){
        fourOperation(req,res);
    }else {
        //如果地址是其他，则报错
        res.end("404 not found");
    }
}).listen(3000);
console.log('after createServer');