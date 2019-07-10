
var hello1=require("./module.js");
hello1.setName("guigu");

var hello2=require("./module.js");
hello2.setName("guigu2");

var hello3=require("./module.js");
hello2.setName("guigu3");

hello1.sayHello();

exports.hello=function(){
    hello1.sayHello();
};