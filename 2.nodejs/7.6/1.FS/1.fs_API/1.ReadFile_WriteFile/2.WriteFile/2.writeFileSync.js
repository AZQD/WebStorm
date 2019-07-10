var fs = require('fs');

var data = '西天取经';
//var result = fs.writeFileSync('out.txt', data, {flag: 'a'});
try {
    fs.writeFileSync('out.txt', data, {flag: 'w'});
}catch (err){
    console.error(err);
}













