var fs=require('fs');
var LOG_FILE='./log/log_file.txt';

function log(content){
    var logStr = Date.now() + '\t' + content+'\n';
    fs.writeFile(LOG_FILE, logStr, {flag:'a'},function(err){
        if(err){
            console.error(err);
        }
    });
}
exports.log=log;