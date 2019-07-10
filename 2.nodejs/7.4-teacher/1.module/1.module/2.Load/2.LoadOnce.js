
//第一次加载
var hello1 = require('./1.module.js');
hello1.setName('atguigu');

//第二次加载
var hello2 = require('./1.module.js');
hello2.setName('atguigu 2');

//第三次加载
var hello3 = require('./1.module.js');
hello3.setName('atguigu 3');


console.log('-------    hello1.sayHello()    ---------')
hello1.sayHello();  //Hello atguigu 3
//无论调动多少次，事实上只是加载一次


//向外暴露接口
exports.hello = function(){
    hello1.sayHello();
};
exports.hello();