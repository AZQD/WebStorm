/**
 * Created by Administrator on 2016/7/28.
 */
function fun2(){
    console.log('c,d例子');
}

//module.exports = fun2;
module.exports.fun2 = fun2;
console.log(exports);
console.log(module.exports);