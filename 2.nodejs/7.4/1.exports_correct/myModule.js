/**
 * Created by Administrator on 2016/7/4.
 */

function flyFun(kilometer){
    var maxLength=15000;
    if(kilometer<maxLength){
        console.log('毕业后我的目标收入是'+maxLength);
    }else {
        console.log('目标达到'+maxLength+',继续努力！');
    }
}
exports.flyFun=flyFun;

exports.name='LiYanhong';

exports.obj={
    name:'baidu',
    address:'beijing'
};

exports.fun2=function(){
    console.log("百度一下");
};

//如果只定义，不exports,那么不可以调用。
var str='baidubaike';
exports.str=str;

//fun3同样需要exports，才可以调用。
function fun3(){
    console.log("GOOD");
}
exports.fun3=fun3;

console.log('COMEON');//此时如果myModule被调用，则会先执行。