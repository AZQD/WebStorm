var fs = require('fs');

var oldStream = fs.createReadStream('old.txt');
var newStream = fs.createWriteStream('1.txt');

// pipe 管道自动控制 暂停和恢复
oldStream.pipe(newStream);