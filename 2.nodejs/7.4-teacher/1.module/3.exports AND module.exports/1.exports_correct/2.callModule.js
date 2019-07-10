
// 引用模块
//var myM = require('./myModule100'); //这个文件不存在
var myModule = require('./1.myModule.js');   //这个文件存在


//打印 引入的对象 观察
console.log(myModule);


// 暴露的可以被访问到
//属性
console.log(myModule.name);
//方法
myModule.fly(200);


// 没有暴露的不能被外部看到
//属性
console.log(myModule.nickName);
//方法
myModule.havoc();  //异常

