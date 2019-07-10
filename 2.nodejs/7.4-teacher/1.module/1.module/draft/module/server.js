
var http = require('http');
var url = require('url');

var business = require('./lib/business_logic.js');


http.createServer(function(req, res){
    //处理用户输入
    var method = req.method;
    var urlStr = req.url;
    var pathName = url.parse(urlStr, true).pathname;
    console.log(pathName);

    //路由
    switch (pathName){
        case '/login':
            if('POST' == method){
                business.login_post(req, res);
            }
            else if('GET' == method){
                business.login_get(req, res);
            }else{
                console.error('method error');
            }
            break;
        case '/register':
            if('POST' == method){
                business.register_post(req, res);
            }
            else if('GET' == method){
                business.register_get(req, res);
            }else{
                console.error('method error');
            }
            break;
        default:
            console.log('404 not found');
            res.end('404 not found');
    }
}).listen(3000, function(){
    console.log('server start listening');
});
