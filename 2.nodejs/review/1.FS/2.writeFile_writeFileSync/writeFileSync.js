/**
 * Created by Administrator on 2016/7/8.
 */
//同步读入文件
var fs = require('fs');

var data = '山重水复疑无路，柳暗花明又一村！\n';

//错误处理用try-catch, 可以这样记：同步都是用try-catch
try{
    fs.writeFileSync('2.txt', data, {flag:'a'});
}catch(err){
    console.error(err);
}
