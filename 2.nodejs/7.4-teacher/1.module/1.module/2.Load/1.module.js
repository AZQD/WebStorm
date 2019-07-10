var name;

exports.setName = function(thyName) {
    name = thyName;
};
exports.sayHello = function() {
    console.log('Hello ' + name);
};


console.log('加载');  //只打印一次
