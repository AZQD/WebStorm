/**
 * Created by Administrator on 2016/7/2.
 */
var str="再别康桥-xzm";
var buffer=new Buffer(str);
console.log(str.length); //8
console.log(buffer.length);//16
//window是javascript中的全局变量，可以在浏览器控制台输出，
//在WebStorm中不存在window
//console.log(window);
console.log("************************");
console.log(global);
console.log(Buffer);