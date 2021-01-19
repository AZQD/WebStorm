// Buffer是Node.js提供的对象，前端没有

const fs = require("fs");
const path = require('path');

//获取当前图片的格式
function getImageType (str) {
    var reg = /\.(png|jpg|gif|jpeg|webp)$/;
    return str.match(reg)[1];
}

let fileName = '30.test.png'; // 文件名称
let dirPath = path.join(__dirname, fileName); // 本地路径名称
fs.readFile(dirPath, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        const buffer = new Buffer(data, 'binary');
        const base64Data = 'data: image/' + getImageType(fileName) + ';base64,' + buffer.toString('base64');
        console.log('base64Data：', base64Data);
    }
});