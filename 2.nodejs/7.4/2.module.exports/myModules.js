
console.log("***********");
//如果exports和exports.name=value同时出现：
exports={name:'swk'};//指向一个对象
exports.address="bj";//附加一个属性
console.log(exports);//{ name: 'swk', address: 'bj' }

exports.address="bj";//附加一个属性
exports={name:'swk'};//指向一个对象,把上面的覆盖了。
console.log(exports);//{ name: 'swk' }

console.log("***********");
module.exports={name:"zs"};//指向一个对象
module.exports.email="123@qq.com";//附加一个属性
console.log(module.exports);//{ name: 'zs', email: '123@qq.com' }

module.exports.email="123@qq.com";//附加一个属性
module.exports={name:"zs"};//指向一个对象,把上面的覆盖了。
console.log(module.exports);//{ name: 'zs' }
