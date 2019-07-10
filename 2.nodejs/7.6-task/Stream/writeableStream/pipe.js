var fs = require('fs');

var readableStream = fs.createReadStream('XiYouJi.txt');
var writeableStream = fs.createWriteStream('outPipe.txt');

readableStream.pipe(writeableStream);