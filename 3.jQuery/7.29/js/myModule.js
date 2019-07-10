/**
 * Created by Administrator on 2016/7/29.
 */

function fun1(){
    var a= 2;
    var b= 5;
    function fun2 (){
        console.log(a*b);
    }
    function fun3 (){
        console.log(a/b);
    }
    return {
        fun2 : fun2,
        fun3 : fun3
    }
}