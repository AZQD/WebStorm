var fs = require('fs');

console.log('111');
fs.readFile('content.txt',function(err,data){
    console.log('222');
    if(err){
        console.error(err);
    }else {
        console.log(data);
    }
});
console.log('333');