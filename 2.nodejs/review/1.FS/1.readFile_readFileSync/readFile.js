/**
 * Created by Administrator on 2016/7/8.
 */
//读文件fs.readFile 异步方式，也是最常用的方式
var fs = require('fs');
var http = require('http');
//console.log(fs);  //打印fs   fs模块是文件操作的封装

http.createServer(function(req,res){


    //可以设置编码格式   入读的内容自动转化为 string 类型
    fs.readFile('honglou.txt', 'utf8', function(err,data){
        if(err){
            console.error(err);
        }
        //console.log(data); //buffer类型
        res.writeHead(200, 'success', {
            //注意这里text/plain后面是分号
            'content-type':'text/plain; charset = utf8'
        });
        res.end(data); //buffer类型
        //console.log(data.toString()); //字符串（也就是文件内容）
    });

}).listen(3000,function(){
    console.log('start server work');
});


