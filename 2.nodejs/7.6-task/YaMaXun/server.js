var http = require('http');
var url = require('url');
var fs = require('fs');
var log = require('./lib/log_module.js');

function readStaticFile(path,res){
    fs.readFile(path,function(err,data){
        if(err){
            console.error(err);
            return;
        }
        log.log(path);
        res.end(data);
    });
}

http.createServer(function(req,res){
    var urlStr = req.url;
    var urlObj = url.parse(urlStr, true);
    var pathname = urlObj.pathname;
    //console.log(pathname);
    var root = './'+'/public';
    switch (pathname){
        case '/':
        case '/index':
        //两个html文件：
        case '/index.html':
            var path = root + '/index.html';
            readStaticFile(path,res);
            break;
        case '/equipment.html':
            path = root + '/equipment.html';
            readStaticFile(path,res);
            break;

        //img下面的直接图片
        case '/img/bg.png':
            path = root + '/img/bg.png';
            readStaticFile(path,res);
            break;
        case '/img/camera1.jpg':
            path = root + '/img/camera1.jpg';
            readStaticFile(path,res);
            break;
        case '/img/camera2.jpg':
            path = root + '/img/camera2.jpg';
            readStaticFile(path,res);
            break;
        case '/img/camera3.jpg':
            path = root + '/img/camera3.jpg';
            readStaticFile(path,res);
            break;
        case '/img/carousel01.jpg':
            path = root + '/img/carousel01.jpg';
            readStaticFile(path,res);
            break;
        case '/img/carousel02.jpg':
            path = root + '/img/carousel02.jpg';
            readStaticFile(path,res);
            break;
        case '/img/carousel03.jpg':
            path = root + '/img/carousel03.jpg';
            readStaticFile(path,res);
            break;
        case '/img/carousel04.jpg':
            path = root + '/img/carousel04.jpg';
            readStaticFile(path,res);
            break;
        case '/img/carousel05.jpg':
            path = root + '/img/carousel05.jpg';
            readStaticFile(path,res);
            break;
        case '/img/carousel06.jpg':
            path = root + '/img/carousel06.jpg';
            readStaticFile(path,res);
            break;
        case '/img/goodList4-1.jpg':
            path = root + '/img/goodList4-1.jpg';
            readStaticFile(path,res);
            break;
        case '/img/goodList4-2.jpg':
            path = root + '/img/goodList4-2.jpg';
            readStaticFile(path,res);
            break;
        case '/img/goodList4-3.jpg':
            path = root + '/img/goodList4-3.jpg';
            readStaticFile(path,res);
            break;
        case '/img/goodsList7-1.jpg':
            path = root + '/img/goodsList7-1.jpg';
            readStaticFile(path,res);
            break;
        case '/img/goodsList7-2.jpg':
            path = root + '/img/goodsList7-2.jpg';
            readStaticFile(path,res);
            break;
        case '/img/headlineLogo.png':
            path = root + '/img/headlineLogo.png';
            readStaticFile(path,res);
            break;
        case '/img/hot1.jpg':
            path = root + '/img/hot1.jpg';
            readStaticFile(path,res);
            break;
        case '/img/hot2.jpg':
            path = root + '/img/hot2.jpg';
            readStaticFile(path,res);
            break;
        case '/img/hot3.jpg':
            path = root + '/img/hot3.jpg';
            readStaticFile(path,res);
            break;
        case '/img/hot4.jpg':
            path = root + '/img/hot4.jpg';
            readStaticFile(path,res);
            break;
        case '/img/hot5.jpg':
            path = root + '/img/hot5.jpg';
            readStaticFile(path,res);
            break;
        case '/img/hot6.jpg':
            path = root + '/img/hot6.jpg';
            readStaticFile(path,res);
            break;
        case '/img/logo-bg.png':
            path = root + '/img/logo-bg.png';
            readStaticFile(path,res);
            break;
        case '/img/sale.jpg':
            path = root + '/img/sale.jpg';
            readStaticFile(path,res);
            break;
        case '/img/shoes1.jpg':
            path = root + '/img/shoes1.jpg';
            readStaticFile(path,res);
            break;
        case '/img/shoes2.jpg':
            path = root + '/img/shoes2.jpg';
            readStaticFile(path,res);
            break;
        case '/img/shoes3.jpg':
            path = root + '/img/shoes3.jpg';
            readStaticFile(path,res);
            break;
        case '/img/logo.gif':
            path = root + '/img/logo.gif';
            readStaticFile(path,res);
            break;

        //img/equipment
        case '/img/equipment/bestSellers1.jpg':
            path = root + '/img/equipment/bestSellers1.jpg';
            readStaticFile(path,res);
            break;
        case '/img/equipment/bestSellers2.jpg':
            path = root + '/img/equipment/bestSellers2.jpg';
            readStaticFile(path,res);
            break;
        case '/img/equipment/bestSellers3.jpg':
            path = root + '/img/equipment/bestSellers3.jpg';
            readStaticFile(path,res);
            break;
        case '/img/equipment/bestSellers4.jpg':
            path = root + '/img/equipment/bestSellers4.jpg';
            readStaticFile(path,res);
            break;
        case '/img/equipment/bestSellers5.jpg':
            path = root + '/img/equipment/bestSellers5.jpg';
            readStaticFile(path,res);
            break;
        case '/img/equipment/bestSellers6.jpg':
            path = root + '/img/equipment/bestSellers6.jpg';
            readStaticFile(path,res);
            break;
        case '/img/equipment/bestSellers7.jpg':
            path = root + '/img/equipment/bestSellers7.jpg';
            readStaticFile(path,res);
            break;
        case '/img/equipment/bestSellers8.jpg':
            path = root + '/img/equipment/bestSellers8.jpg';
            readStaticFile(path,res);
            break;
        case '/img/equipment/bestSellers9.jpg':
            path = root + '/img/equipment/bestSellers9.jpg';
            readStaticFile(path,res);
            break;
        case '/img/equipment/bestSellers10.jpg':
            path = root + '/img/equipment/bestSellers10.jpg';
            readStaticFile(path,res);
            break;
        case '/img/equipment/navImg1.jpg':
            path = root + '/img/equipment/navImg1.jpg';
            readStaticFile(path,res);
            break;
        case '/img/equipment/navImg2.jpg':
            path = root + '/img/equipment/navImg2.jpg';
            readStaticFile(path,res);
            break;
        case '/img/equipment/navImg3.jpg':
            path = root + '/img/equipment/navImg3.jpg';
            readStaticFile(path,res);
            break;
        case '/img/equipment/navImg4.jpg':
            path = root + '/img/equipment/navImg4.jpg';
            readStaticFile(path,res);
            break;
        case '/img/equipment/navImg5.jpg':
            path = root + '/img/equipment/navImg5.jpg';
            readStaticFile(path,res);
            break;
        case '/img/equipment/navImg6.jpg':
            path = root + '/img/equipment/navImg6.jpg';
            readStaticFile(path,res);
            break;
        case '/img/equipment/star.jpg':
            path = root + '/img/equipment/star.jpg';
            readStaticFile(path,res);
            break;


        //css
        case '/css/cssreset.css':
            path = root + '/css/cssreset.css';
            readStaticFile(path,res);
            break;
        case '/css/equipment.css':
            path = root + '/css/equipment.css';
            readStaticFile(path,res);
            break;
        case '/css/index.css':
            path = root + '/css/index.css';
            readStaticFile(path,res);
            break;

        //js
        case '/js/index.js':
            path = root + '/js/index.js';
            readStaticFile(path,res);
            break;
        case '/favicon.ico':
            break;




        default :
            console.log('404 not found');
            console.log(pathname);

    }
}).listen(3000, function(){
    console.log('start server work');
});