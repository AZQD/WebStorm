/**
 * Created by Administrator on 2016/6/28.
 */
var http=require('http');
var url=require('url');
http.createServer(function(req,res){
    var urlStr=req.url;
    var urlObj=url.parse(urlStr,true);
    var a=urlObj.query.a;
    var b=urlObj.query.b;
    a=Number.parseInt(a);
    b=Number.parseInt(b);
    var result=a+b;
    resultsd=resultsd.toString();
    res.end(resultsd);
}).listen(3000);
/*
var url=require("url");
var http=require("http");
http.createServer(function(req,res){
    var urlStr=req.url;  //现在是一个字符串
    console.log( typeof urlStr);

    var urlObj=url.parse(urlStr,true);
    var a=urlObj.query.a;
    var b=urlObj.query.b;

    a=Number.parseInt(a);
    b=Number.parseInt(b);
    // console.log( typeof a);
    var result=a+b;
    result=result.toString();
    //console.log(typeof result); //result是一个字符型类型
    res.end(result);


}).listen(3000);*/
