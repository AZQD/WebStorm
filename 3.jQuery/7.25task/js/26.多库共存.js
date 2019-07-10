/**
 * Created by Administrator on 2016/7/25.
 */

//基本写法
//window.$ = function(){
//    alert('china');
//};

//经典写法
(function(w){
    w.$ = function(){
        alert('hello');
    };
})(window);

