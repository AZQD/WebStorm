/**
 * Created by Administrator on 2016/7/4.
 */

//var aa=1;
function fun1(){
    aa=3;
    //console.log(aa);
    return aa;
}
//此时可以把
var bb=fun1();

function fun2(i){
    console.log(i);
}
fun2(bb);