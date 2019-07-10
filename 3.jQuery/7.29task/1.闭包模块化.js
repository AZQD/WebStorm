/**
 * Created by Administrator on 2016/7/29.
 */
function fun1 (){
    function fun2(){
        console.log('fun2');
    }
    function fun3(){
        console.log('fun3');
    }

    //向外暴露
    return {
        fun2 : fun2,
        fun3 : fun3
    }
}