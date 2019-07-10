/**
 * Created by Administrator on 2016/7/25.
 */
//路径：http://127.0.0.1:3000/?a=1&b=6

var http = require('http');
var url = require('url');


http.createServer(function(req, res){
    //console.log(req);
    var urlStr = req.url;
    console.log(urlStr);
    var urlObj = url.parse(urlStr, true);
    var a = urlObj.query.a;
    var b= urlObj.query.b;

    a= Number.parseInt(a);
    b = Number.parseInt(b);

    var result = a+b;
    var result = result.toString();
    res.end(result);
}).listen(3000, function(){
    console.log('server is ok');
});