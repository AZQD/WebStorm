
//module.exports
//module.exports 与 exports 在最开始是指向同一个对象
console.log('module.exports === exports ?   ' + (module.exports === exports) );    // 同一个对象


//对 module.exports 附着属性 与 对 exports 附着属性 效果相同
module.exports.newName = 'bajie';
console.log(module.exports);    // 其他文件中 require 方法返回的对象和这里的 module.exports 是一样的。
console.log(exports);   //exports 对象与 module.exports 相同
console.log('module.exports === exports ?   ' + (module.exports === exports) );    // 此时仍旧指向同一个对象










