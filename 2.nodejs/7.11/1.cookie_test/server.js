var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res){
    var pathName = url.parse(req.url, true).pathname;
    switch (pathName){
        case '/' :
            sendPageIndex(req, res);
            break;
        case '/checkcookie':
            sendPageCheckCookie(req, res);
            break;
        default :
            res.end('404');
    }
}).listen(3000, function () {
    console.log('start server working');
});


function sendPageCheckCookie(req, res){
    console.log('req.headers.cookie');
    res.end(req.headers.cookie);
}



function sendPageIndex(req, res){
    var headerObj = {
        'content-type': 'text/html; charset=utf8',
        'set-cookie': ['userName= ITLeader ', 'salary=15000', 'address=beijing;httpOnly=true']
        //'set-cookie' : ['userName=wukong', 'age=3000', 'gender=male;httpOnly=true' ]
    };
    res.writeHead(200, 'success', headerObj);
    fs.readFile('./pages/index.html', function(err, data){
        if(err){
            console.error(err);
        }else {
            res.end(data);
        }
    });
}