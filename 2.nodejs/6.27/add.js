/**
 * Created by Administrator on 2016/6/27.
 */
/*
var gl=global;
gl.name="hello";
console.log(typeof global);
console.log(typeof gl.name);*/
/*console.time("hello");
for(var i=0;i<1000;i++){
    var a=1;
    a++;
    console.log(a);
}
console.timeEnd("hello");*/

/*
var http=require('http');
var url = require('url');
//console.log(http);


http.createServer(function(req,res){
    var urlStr=req.url;
    //console.log(req.url);

    var urlObj=url.parse(urlStr,true);
    var a=urlObj.query.a;
    var b=urlObj.query.b;
    a=Number.parseInt(a);
    b=Number.parseInt(b);

    var result=a-b;
    result=result.toString();
    res.end(result);
}).listen(3000);
*/

//console.log(typeof  parseInt("ni"));
//console.log('http'+"niha");
var url=require("url");
var http=require("http");
//console.log(typeof url);
//console.log(typeof http);
//console.log(http.createServer); //Function

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
    resultsd=resultsd.toString();
    //console.log(typeof result); //result是一个字符型类型
    res.end(resultsd);


}).listen(3000);
