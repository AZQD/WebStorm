var http = require('http');

http.createServer(function(req, res){

    var str = '<h1>我是通过服务器创建，用res.end()输出到页面的~~~</h1>';
    res.writeHead(200, 'success', {
        'content-type': 'text/html;charset = utf8'
    });
    res.end(str);

}).listen(3000,function(){
    console.log('start');
});
