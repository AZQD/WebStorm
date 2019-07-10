/**
 * Created by Administrator on 2016/7/29.
 */


function fun1(){

}

(function (w){
    var a= 8;
    var b= 16;
    function fun2 (){
        console.log(a*b);
    }
    function fun3 (){
        console.log(a/b);
    }
    w.result = {
        fun2 : fun2,
        fun3 : fun3
    }
})(window);