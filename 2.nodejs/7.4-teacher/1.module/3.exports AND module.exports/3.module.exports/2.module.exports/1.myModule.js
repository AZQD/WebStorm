//语法：exports.name = value
//      exports.名 = 值
//如果 不是给 exports 附加属性，而是期望其指向一个对象, 这样的语句不会抛异常，也不会有效果
//exports = [1, 2, 3, 4];     //没有效果
//exports = {
//    home : '花果山',
//    weapon : '金箍棒',
//    car : '筋斗云'
//};

function eatFun(){
    console.log('技能_吃');
}

//最开始  module.exports 与 exports   指向同一个对象
console.log('module.exports === exports ? ' + (module.exports === exports) );        // 同一个对象
// module.exports 指向了一个 【新】的对象
module.exports = {name: 'bajie', skill: eatFun};
//由于 module.exports 指向了一个新的对象，于是 module.exports 与 exports 指向了不同的对象
console.log('module.exports === exports ? ' + (module.exports === exports) );        // 不同的对象

//指向不同的对象后，分别打印
console.log(module.exports);
console.log(exports);

//向 exports 附着属性
exports.address = '高老庄';    // 没有被加入
//向 module.exports 附着属性
module.exports.email = 'bajie@atguigu.com';   // 被加入

console.log('--------------');
//附着属性后，分别打印
console.log(module.exports);
console.log(exports);

//外部代码引入本模块后，实际上引用的是 module.exports 所指向的对象






