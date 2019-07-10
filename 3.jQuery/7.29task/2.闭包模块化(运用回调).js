/**
 * Created by Administrator on 2016/7/29.
 */
(function(w){
    function fun2(){
        console.log('fun2');
    }
    function fun3(){
        console.log('fun3');
    }
    w.result = {
        fun2 : fun2,
        fun3 : fun3
    }
})(window);