var fs = require('fs');

//var data = fs.readFileSync('content.txt');
//console.log(data);// 返回Buffer类型


//var data = fs.readFileSync('content.txt','utf8');
//console.log(data);

//var data = fs.readFileSync('content.txt','hex');
//console.log(data);

try {
    var data = fs.readFileSync('content.txt','utf8');
    console.log(data);
}catch (err){
    console.error(err);
    console.trace('readFileSync 出错了');
}

