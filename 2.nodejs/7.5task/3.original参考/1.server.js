var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res){
    var urlStr = req.url;
    var urlObj = url.parse(urlStr, true);
    console.log(urlObj.pathname);
    var pathName = urlObj.pathname;

    var root = './' + 'public';
    //路由
    switch (pathName){
        case '/':
        case '/index':
        case '/index.html':
            var path = root + '/index.html';
            fs.readFile(path, function(err, data){
                if(err){
                    console.error(err);
                    return;
                }
                res.end(data);
            });
            break;
        case '/css-min/reset.css':
            path = root + '/css-min/reset.css';
            fs.readFile(path, function(err, data){
                if(err){
                    console.error(err);
                    return;
                }
                res.end(data);
            });
            break;
        case '/css-min/page-index.css':
            path = root + '/css-min/page-index.css';
            fs.readFile(path, function(err, data){
                if(err){
                    console.error(err);
                    return;
                }
                res.end(data);
            });
            break;
        case '/img/logo.png':
            path = root + '/img/logo.png';
            fs.readFile(path, function(err, data){
                if(err){
                    console.error(err);
                    return;
                }
                res.end(data);
            });
            break;
        case '/img/banner/banner-01.png':
            path = root + '/img/banner/banner-01.png';
            fs.readFile(path, function(err, data){
                if(err){
                    console.error(err);
                    return;
                }
                res.end(data);
            });
            break;
        case '/img/pic/pic1.jpg':
            path = root + '/img/pic/pic1.jpg';
            fs.readFile(path, function(err, data){
                if(err){
                    console.error(err);
                    return;
                }
                res.end(data);
            });
            break;
        case '/img/pic/pic2.jpg':
            path = root + '/img/pic/pic2.jpg';
            fs.readFile(path, function(err, data){
                if(err){
                    console.error(err);
                    return;
                }
                res.end(data);
            });
            break;
        case '/img/pic/pic3.jpg':
            path = root + '/img/pic/pic3.jpg';
            fs.readFile(path, function(err, data){
                if(err){
                    console.error(err);
                    return;
                }
                res.end(data);
            });
            break;
        case '/img/rss.png':
            path = root + '/img/rss.png';
            fs.readFile(path, function(err, data){
                if(err){
                    console.error(err);
                    return;
                }
                res.end(data);
            });
            break;
        case '/img/fb.png':
            path = root + '/img/fb.png';
            fs.readFile(path, function(err, data){
                if(err){
                    console.error(err);
                    return;
                }
                res.end(data);
            });
            break;
        case '/img/in.png':
            path = root + '/img/in.png';
            fs.readFile(path, function(err, data){
                if(err){
                    console.error(err);
                    return;
                }
                res.end(data);
            });
            break;
        case '/img/yt.png':
            path = root + '/img/yt.png';
            fs.readFile(path, function(err, data){
                if(err){
                    console.error(err);
                    return;
                }
                res.end(data);
            });
            break;
        case '/img/tw.png':
            path = root + '/img/tw.png';
            fs.readFile(path, function(err, data){
                if(err){
                    console.error(err);
                    return;
                }
                res.end(data);
            });
            break;
        case '/favicon.ico':
            path = root + '/img/favicon.ico';
            fs.readFile(path, function(err, data){
                if(err){
                    console.error(err);
                    return;
                }
                res.end(data);
            });
            break;
        case '/img/body-bg.png':
            path = root + '/img/body-bg.png';
            fs.readFile(path, function(err, data){
                if(err){
                    console.error(err);
                    return;
                }
                res.end(data);
            });
            break;
        case '/img/btn/btn02.png':
            path = root + '/img/btn/btn02.png';
            fs.readFile(path, function(err, data){
                if(err){
                    console.error(err);
                    return;
                }
                res.end(data);
            });
            break;
        case '/img/3.gif':
            path = root + '/img/3.gif';
            fs.readFile(path, function(err, data){
                if(err){
                    console.error(err);
                    return;
                }
                res.end(data);
            });
            break;
        case '/img/2.gif':
            path = root + '/img/2.gif';
            fs.readFile(path, function(err, data){
                if(err){
                    console.error(err);
                    return;
                }
                res.end(data);
            });
            break;
        case '/img/input-bg.png':
            path = root + '/img/input-bg.png';
            fs.readFile(path, function(err, data){
                if(err){
                    console.error(err);
                    return;
                }
                res.end(data);
            });
            break;
        case '/img/textarea-bg.png':
            path = root + '/img/textarea-bg.png';
            fs.readFile(path, function(err, data){
                if(err){
                    console.error(err);
                    return;
                }
                res.end(data);
            });
            break;
        case '/img/btn/btn01.png':
            path = root + '/img/btn/btn01.png';
            fs.readFile(path, function(err, data){
                if(err){
                    console.error(err);
                    return;
                }
                res.end(data);
            });
            break;
        case '/img/img-bg.png':
            path = root + '/img/img-bg.png';
            fs.readFile(path, function(err, data){
                if(err){
                    console.error(err);
                    return;
                }
                res.end(data);
            });
            break;
        case '/img/1.gif':
            path = root + '/img/1.gif';
            fs.readFile(path, function(err, data){
                if(err){
                    console.error(err);
                    return;
                }
                res.end(data);
            });
            break;
        case '/img/icon/pointer.png':
            path = root + '/img/icon/pointer.png';
            fs.readFile(path, function(err, data){
                if(err){
                    console.error(err);
                    return;
                }
                res.end(data);
            });
            break;
        case '/img/banner-bg.png':
            path = root + '/img/banner-bg.png';
            fs.readFile(path, function(err, data){
                if(err){
                    console.error(err);
                    return;
                }
                res.end(data);
            });
            break;
        case '/img/break.png':
            path = root + '/img/break.png';
            fs.readFile(path, function(err, data){
                if(err){
                    console.error(err);
                    return;
                }
                res.end(data);
            });
            break;
        default:
            console.log('not found');
            res.end('404 not found');
    }
}).listen(3000);
console.log('after createSever');