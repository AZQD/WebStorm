

var fs = require('fs');

try{
    var data = fs.readFileSync('白雪公主.txt', 'utf8');
    console.log(data);
}catch (err) {
    console.error(err);
    console.trace('readFileSync 出错了！！！');
}


console.log('readFileSync是同步，现在是顺序执行！！！');








