//语法：exports.name = value
//      exports.名 = 值
//如果 不是给 exports 附加属性，而是期望其指向一个对象, 这样的语句不会抛异常，也不会有效果
exports = [1, 2, 3, 4];     //没有效果
exports = {
    home : '花果山',
    weapon : '金箍棒',
    car : '筋斗云'
};





