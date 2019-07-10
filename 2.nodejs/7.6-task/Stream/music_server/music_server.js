var http = require('http');
var fs = require('fs');

http.createServer(function(request,response){
    var mp3 = 'Sweety.mp3';
    var stat = fs.statSync(mp3);

    response.writeHead(200,{
        'Content-Type':'audio/mpeg',
        'Content-Length':stat.size  //获取文件的大小
    });
    var readableStream = fs.createReadStream(mp3);
    readableStream.pipe(response);

}).listen(3000,function(){
    console.log('开始歌唱喽');
});