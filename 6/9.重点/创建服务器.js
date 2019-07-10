var http = require('http');
http.createServer(function(req, res){
    var str = 'hello world! 北京你好！';
    res.writeHead(200, 'success', {
        'content-type':'text/html;charset=utf-8'
    });
    res.end(str);
}).listen(3000, function(){
    console.log('start server');
});