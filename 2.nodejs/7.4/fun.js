/**
 * Created by Administrator on 2016/7/4.
 */
/*
var y=new Function;
x = y(function () {
    console.log("abc");
}());
*/


//示例代码1
//var x = 1;
//var obj = {valueOf: function(){ x = 2; return 0 }}
//console.log(obj == 0, x)
//
////示例代码2
//var x = 1;
//var obj = {valueOf: function(){ return {} }, toString: function(){ return {}}}
//console.log(obj == 0)

var obj1={};
var obj2=null;
var obj3="0";
console.log(obj1 == 0);
console.log(obj2 == 0);
console.log(obj3 == 0);
console.log(typeof null);
console.log(typeof false);
console.log(obj1 instanceof Object);
console.log(obj2 instanceof Object);
if(!!null==false){
    console.log("abc");
}
(function (5){})(5);