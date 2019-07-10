
// 引用模块
//var myM = require('./myModule100'); //这个文件不存在
var myModule = require('./1.myModule.js');   //这个文件存在


//打印 引入的对象 观察
console.log(myModule);

// exports 本来就不能指定一个对象出来
// 键值对
// module.exports 可以指向一个 对象