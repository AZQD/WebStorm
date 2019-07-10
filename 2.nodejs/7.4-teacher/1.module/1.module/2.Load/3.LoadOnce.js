
//再次加载 './1.module.js' 模块
var myModule = require('./1.module.js');

//加载 './2.LoadOnce.js' 模块，其中 './2.LoadOnce.js' 模块已经 require 了 3 次 './1.module.js' 模块
//但是，最终，打印了一次 '加载'， 说明 模块只被加载了一次
var loadOnce = require('./2.LoadOnce.js');

console.log('-------    myModule.sayHello()    ---------')
myModule.sayHello();

console.log('-------    loadOnce.hello()    ---------')
loadOnce.hello();














