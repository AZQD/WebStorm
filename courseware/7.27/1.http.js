/**
 * Created by Administrator on 2016/7/25.
 */
var http = require('http');
console.log(http);
http.createServer(function(req, res){
    //res.end('hello world');
    res.end('<h1>hello world</h1>');
}).listen(3000, function(){
    console.log('server is ok');
});