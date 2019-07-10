var fs = require('fs');

var data = '西天取经\n';
//写文件
// a 添加
fs.writeFile('out.txt', data, {flag: 'w'}, function(err){
    if(err){
        console.error(err);
    }
});











