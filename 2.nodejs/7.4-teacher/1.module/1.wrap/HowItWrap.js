//wrap [ræp] vi. vt.n. 包起来


var __filename = process.argv[1];
var __dirname = process.cwd();

var obj = {};
var exports = obj;
var module = {
    exports : obj
};
var require = function(moduleName){
    console.log('加载 ' , moduleName, ' 模块');
};


//node 包装完之后的样子
(function (exports, require, module, __filename, __dirname) {
    //函数的参数   可以理解为 本地 var
    //module    exports   重点讨论
    var http = require('http');
    console.log('hello world');
    console.log(__filename);
    console.log(__dirname);

})(exports, require, module, __filename, __dirname);

//console.log(process);
