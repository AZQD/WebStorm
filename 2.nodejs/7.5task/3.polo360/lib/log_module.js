var fs=require('fs');
var LOG_FILE='./log/log_file.txt';

function log(content){
    var logStr = Date.now() + '\t' + content+'\n';
    //页面每刷新一次，就会添加写入一次到LOG_FILE
    fs.writeFile(LOG_FILE, logStr, {flag:'a'},function(err){
        if(err){
            console.error(err);
        }
    });
}
exports.log=log;