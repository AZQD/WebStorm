var http=require('http');
var url=require('url');
var fs=require('fs');
var log=require('./lib/log_module.js');

//var root = './'+'3.polo360'+'/public';





function readStaticFile(path,res){
    fs.readFile(path,function(err,data){
        if(err){
            console.error(err);
        }else {
            log.log(path);
            res.end(data);
            //console.log("基本html页面打印出来了");
        }
    });
}


http.createServer(function(req,res){

    var urlStr = req.url;
    var urlObj = url.parse(urlStr,true);
    //console.log(urlObj);
    var pathname = urlObj.pathname;
    //console.log(pathname);
    var root = './'+'public';
    switch (pathname){
        case '/':
        /*case '/favicon.ico':
            break;*/
        case '/index':
        case '/index.html':
            var path=root+'/index.html';
            //console.log(path);
            /*fs.readFile(path,function(err,data){
         if(err){
         console.error(err);
         }else {
         fs.writeFile(LOG_FILE, Date.now() + path+'\n', {flag:'a'},function(err){
         if(err){
         console.error(err);
         }
         });
         res.end(data);
         //console.log("基本html页面打印出来了");
         }
         });*/
            readStaticFile(path,res);
            break;

        //样式信息
        case '/css/page-index.css':
            path=root+'/css/page-index.css';
            //console.log(path);
            /*fs.readFile(path,function(err,data){
                if(err){
                    console.error(err);
                }else {
                    res.end(data);
                    //console.log("样式");
                }
            });*/
            readStaticFile(path,res);
            break;
        case '/css/reset.css':
            path=root+'/css/reset.css';
            //console.log(path);
            /*fs.readFile(path,function(err,data){
                if(err){
                    console.error(err);
                }else {
                    res.end(data);
                    //console.log("样式");
                }
            });*/
            readStaticFile(path,res);
            break;

        //引入图片banner
        case '/img/favicon.ico':
            path=root+'/img/favicon.ico';
            //console.log(path);
            fs.readFile(path,function(err,data){
                if(err){
                    console.error(err);
                }else {
                    res.end(data);
                }
            });
            break;
        case '/img/banner/banner.png':
            path=root+'/img/banner/banner.png';
            //console.log(path);
            fs.readFile(path,function(err,data){
                if(err){
                    console.error(err);
                }else {
                    res.end(data);
                }
            });
            break;
        case '/img/banner/banner-bg.png':
            path=root+'/img/banner/banner-bg.png';
            //console.log(path);
            fs.readFile(path,function(err,data){
                if(err){
                    console.error(err);
                }else {
                    res.end(data);
                }
            });
            break;
        case '/img/banner/banner_active.png':
            path=root+'/img/banner/banner_active.png';
            //console.log(path);
            fs.readFile(path,function(err,data){
                if(err){
                    console.error(err);
                }else {
                    res.end(data);
                }
            });
            break;
        case '/img/banner/banner_noactive.png':
            path=root+'/img/banner/banner_noactive.png';
            //console.log(path);
            fs.readFile(path,function(err,data){
                if(err){
                    console.error(err);
                }else {
                    res.end(data);
                }
            });
            break;

        //引入图片banner
        case '/img/contact/contact-bg01.png':
            path=root+'/img/contact/contact-bg01.png';
            //console.log(path);
            fs.readFile(path,function(err,data){
                if(err){
                    console.error(err);
                }else {
                    res.end(data);
                }
            });
            break;
        case '/img/contact/contactA01.png':
            path=root+'/img/contact/contactA01.png';
            //console.log(path);
            fs.readFile(path,function(err,data){
                if(err){
                    console.error(err);
                }else {
                    res.end(data);
                }
            });
            break;
        case '/img/contact/contactA02.png':
            path=root+'/img/contact/contactA02.png';
            //console.log(path);
            fs.readFile(path,function(err,data){
                if(err){
                    console.error(err);
                }else {
                    res.end(data);
                }
            });
            break;
        case '/img/contact/contactA03.png':
            path=root+'/img/contact/contactA03.png';
            //console.log(path);
            fs.readFile(path,function(err,data){
                if(err){
                    console.error(err);
                }else {
                    res.end(data);
                }
            });
            break;
        case '/img/contact/contactA04.png':
            path=root+'/img/contact/contactA04.png';
            //console.log(path);
            fs.readFile(path,function(err,data){
                if(err){
                    console.error(err);
                }else {
                    res.end(data);
                }
            });
            break;
        case '/img/contact/contactA05.png':
            path=root+'/img/contact/contactA05.png';
            //console.log(path);
            fs.readFile(path,function(err,data){
                if(err){
                    console.error(err);
                }else {
                    res.end(data);
                }
            });
            break;
        case '/img/contact/contactA-bg2.png':
            path=root+'/img/contact/contactA-bg2.png';
            //console.log(path);
            fs.readFile(path,function(err,data){
                if(err){
                    console.error(err);
                }else {
                    res.end(data);
                }
            });
            break;
        case '/img/contact/contactB-bg02.png':
            path=root+'/img/contact/contactB-bg02.png';
            //console.log(path);
            fs.readFile(path,function(err,data){
                if(err){
                    console.error(err);
                }else {
                    res.end(data);
                }
            });
            break;
        case '/img/contact/contactC01.jpg':
            path=root+'/img/contact/contactC01.jpg';
            //console.log(path);
            fs.readFile(path,function(err,data){
                if(err){
                    console.error(err);
                }else {
                    res.end(data);
                }
            });
            break;
        case '/img/contact/contactC02.jpg':
            path=root+'/img/contact/contactC02.jpg';
            //console.log(path);
            fs.readFile(path,function(err,data){
                if(err){
                    console.error(err);
                }else {
                    res.end(data);
                }
            });
            break;
        case '/img/contact/contactC03.jpg':
            path=root+'/img/contact/contactC03.jpg';
            //console.log(path);
            fs.readFile(path,function(err,data){
                if(err){
                    console.error(err);
                }else {
                    res.end(data);
                }
            });
            break;
        case '/img/contact/contactC-bg.png':
            path=root+'/img/contact/contactC-bg.png';
            //console.log(path);
            fs.readFile(path,function(err,data){
                if(err){
                    console.error(err);
                }else {
                    res.end(data);
                }
            });
            break;

        //图片content
        case '/img/content/btn-bg.png':
            path=root+'/img/content/btn-bg.png';
            //console.log(path);
            fs.readFile(path,function(err,data){
                if(err){
                    console.error(err);
                }else {
                    res.end(data);
                }
            });
            break;
        case '/img/content/content-h2bg.png':
            path=root+'/img/content/content-h2bg.png';
            //console.log(path);
            fs.readFile(path,function(err,data){
                if(err){
                    console.error(err);
                }else {
                    res.end(data);
                }
            });
            break;
        case '/img/content/contentA-01.jpg':
            path=root+'/img/content/contentA-01.jpg';
            //console.log(path);
            fs.readFile(path,function(err,data){
                if(err){
                    console.error(err);
                }else {
                    res.end(data);
                }
            });
            break;
        case '/img/content/contentB-01.jpg':
            path=root+'/img/content/contentB-01.jpg';
            //console.log(path);
            fs.readFile(path,function(err,data){
                if(err){
                    console.error(err);
                }else {
                    res.end(data);
                }
            });
            break;
        case '/img/content/contentC-01.jpg':
            path=root+'/img/content/contentC-01.jpg';
            //console.log(path);
            fs.readFile(path,function(err,data){
                if(err){
                    console.error(err);
                }else {
                    res.end(data);
                }
            });
            break;
        case '/img/content/contentPic-bg.png':
            path=root+'/img/content/contentPic-bg.png';
            //console.log(path);
            fs.readFile(path,function(err,data){
                if(err){
                    console.error(err);
                }else {
                    res.end(data);
                }
            });
            break;

        //图片footer
        case '/img/footer/polo360.png':
            path=root+'/img/footer/polo360.png';
            //console.log(path);
            fs.readFile(path,function(err,data){
                if(err){
                    console.error(err);
                }else {
                    res.end(data);
                }
            });
            break;

        //图片header
        case '/img/header/body-bg.png':
            path=root+'/img/header/body-bg.png';
            //console.log(path);
            fs.readFile(path,function(err,data){
                if(err){
                    console.error(err);
                }else {
                    res.end(data);
                }
            });
            break;
        case '/img/header/logo.png':
            path=root+'/img/header/logo.png';
            //console.log(path);
            fs.readFile(path,function(err,data){
                if(err){
                    console.error(err);
                }else {
                    res.end(data);
                }
            });
            break;

        //js
        case '/js/DD_belatedPNG_0.0.8a-min.js':
            path=root+'/js/DD_belatedPNG_0.0.8a-min.js';
            //console.log(path);
            fs.readFile(path,function(err,data){
                if(err){
                    console.error(err);
                }else {
                    res.end(data);
                }
            });
            break;
        case '/favicon.ico':
            break;
        default:
            console.error('404 not found！');
            console.log(pathname);
    }

}).listen(3000,function(){
    console.log('start server work');
});
















