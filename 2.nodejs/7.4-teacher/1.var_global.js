//函数之间 通信 值的共享

//模块本地的变量
var aa = 9;

//global *** 危险
cc = 11;
var dd = '-1'; // 初始化

// fun1 和 fun2 想通信
// 1. 数据挂在 global 上 ， 代码少
// 2. 本地函数返回值进行通信  **推荐
function fun1(){

    //本函数 fun2 无法得到这个 bb 的值
    var bb  =10;
    var ee = 13;
    //cc = 99;
    return ee;
}
dd = fun1();

function fun2(dd){ //函数形参
    //console.log(cc);

    /*
     var 变量
     dd = undefined;
     dd = dd; //初始化 赋值
     */

    //本函数
    var bb  =10;
    console.log(dd);
}
fun2(dd);




