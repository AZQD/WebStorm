var fs = require('fs');

function copyFile(oldFile, newFile){
    var readStream = fs.createReadStream(oldFile);
    var writeStream = fs.createWriteStream(newFile);
    readStream.pipe(writeStream);
}

var oldFile = './oldContent.txt';
var newFile = './newContent.txt';
copyFile(oldFile, newFile);

//还有另外的方法进行复制，包括剪切。详细见7.6内容。
// 所谓的剪切文件，事实上就是首先将文件拷贝到一个位置
// 然后，把旧的文件删除掉