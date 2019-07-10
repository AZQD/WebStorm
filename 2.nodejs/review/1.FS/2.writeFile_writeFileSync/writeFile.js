/**
 * Created by Administrator on 2016/7/8.
 */
// 异步写入文件
var fs = require('fs');

var data = '一双丹凤三角眼，两弯柳叶吊梢眉。\n';

//var path = '../1.readFile_readFileSync/1.txt';
var path = './1.txt';

//function中只有一个参数err
fs.writeFile(path, data, {flag:'a'}, function(err){
    if(err){
        console.error(err);
    }
});