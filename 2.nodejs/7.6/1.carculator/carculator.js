var http = require('http');
var url = require('url');
var qs = require('querystring');
var fs = require('fs');

/*
var pageGet='<!DOCTYPE html> \
    <html lang="en"> \
    <head> \
    <meta charset="UTF-8"> \
    <title>Title</title> \
    </head> \
    <body> \
    <form action="/fourOperation" method="get"> \
    <label for="op">op:</label> \
<select name="op" id="op"> \
    <option>add</option> \
    <option>subtract</option> \
    <option>multiply</option> \
    <option>divide</option> \
    </select><br/> \
    <label for="one">a :</label> \
<input type="text" id="one" name="a"><br/> \
    <label for="two">b :</label> \
<input type="text" id="two" name="b"><br/> \
    <input type="submit" value="提交"> \
    </form> \
    </body> \
    </html>';*/
/*

var pagePost='<!DOCTYPE html> \
    <html lang="en"> \
    <head> \
    <meta charset="UTF-8"> \
    <title>Title</title> \
    </head> \
    <body> \
    <form action="/fourOperation" method="post"> \
    <label for="op">op:</label> \
<select name="op" id="op"> \
    <option>add</option> \
    <option>subtract</option> \
    <option>multiply</option> \
    <option>divide</option> \
    </select><br/> \
    <label for="one">a :</label> \
<input type="text" id="one" name="a"><br/> \
    <label for="two">b :</label> \
<input type="text" id="two" name="b"><br/> \
    <input type="submit" value="提交"> \
    </form> \
    </body> \
    </html>';
*/

/*var POST_FILE='./carculator/pages/post.html';
var GET_FILE='./carculator/pages/get.html';*/

var root='./'+'/pages';

var OUT_GET = './out_get.txt';
var OUT_POST = './out_post.txt';



function getInfo(req,res){

    var urlStr = req.url;  //url 路径     //urlStr 路径的字符串
    //console.log(urlStr);
    var urlObj = url.parse(urlStr,true); //转换为对象
    var op = urlObj.query.op;//query 查询
    var a=urlObj.query.a;
    var b=urlObj.query.b;
    var pathname=urlObj.pathname;
    //console.log(urlObj);
    a=Number.parseInt(a);
    b=Number.parseInt(b);
    //console.log(a);
    //console.log(b);
    var result = 0;

    switch (op){
        case 'add':
            result=a+b;
            console.log('加法');
            break;
        case 'subtract':
            result=a-b;
            console.log('减法');
            break;
        case 'multiply':
            result=a*b;
            console.log('乘法');
            break;
        case 'divide':
            result=a/b;
            console.log('除法');
            break;
        default :
            console.log('op is wrong');
    }
    result=result.toString();
    result=result+'\n';
    fs.writeFile(OUT_GET,result,{flag:'a'},function(err){
        if(err){
            console.error(err);
        }
    });
    res.end(result);
}

function postInfo(req,res){
    var dataStr='';
    req.on('data',function(chunk){
        dataStr+=chunk;
    });
    req.on('end', function(){
        console.log(dataStr);
        var queryString=qs.parse(dataStr);
        var a = queryString.a;
        var b = queryString.b;
        var op=queryString.op;
        a=Number.parseInt(a);
        b=Number.parseInt(b);
        var result=0;
        switch (op){
            case 'add':
                result=a+b;
                console.log('加法');
                break;
            case 'subtract':
                result=a-b;
                console.log('减法');
                break;
            case 'multiply':
                result=a*b;
                console.log('乘法');
                break;
            case 'divide':
                result=a/b;
                console.log('除法');
                break;
            default :
                console.log('op is wrong');
                console.log(queryString.pathname);
        }
        result=result.toString();
        result=result+'\n';
        /*var OUT_GET = './out_get.txt';
        var OUT_POST = './out_post.txt';*/
        fs.writeFile(OUT_POST,result,{flag:'a'},function(err){
            if(err){
                console.error(err);
            }
        });
        res.end(result);
    });

}



http.createServer(function(req,res){
    var urlStr=req.url;
    var urlObj=url.parse(urlStr,true);
    var pathname=urlObj.pathname;
    var method=req.method;


    if('/'==pathname || '/get'===pathname || '/favicon.ico'==pathname){
        //获取get页面
        //res.end(pageGet);
        var path=root+'/get.html';
        fs.readFile(path,function(err,data){
            if(err){
                console.error(err);
                return;
            }
            res.end(data);
        });
    }else if('/post'==pathname){
        //res.end(pagePost);
        path=root+'/post.html';
        fs.readFile(path,function(err,data){
            if(err){
                console.error(err);
                return;
            }
            res.end(data);
        });
    }else if('/fourOperation'==pathname && "POST"==method){
        //var result=0;
        postInfo(req,res);
        //getInfo(req,res);
        console.log("******************");
        /*var OUT_GET = './out_get.txt';
        var OUT_POST = './out_post.txt';*/


    }
    else if('/fourOperation'==pathname && "GET"==method){
        getInfo(req,res);
    }else {
        console.log("404 not found");
        console.log(pathname);
    }


}).listen(3000, function(){
    console.log('start server work!');
});















