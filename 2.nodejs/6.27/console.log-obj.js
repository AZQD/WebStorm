/**
 * Created by Administrator on 2016/6/27.
 */
var obj={
    name:"li",
    age:12,
    address:"bj"
};
console.log(obj);
console.log("obj",obj);
console.log("obj"+obj); //obj[object Object] 拼串相当于用了toString
console.log("obj,%j",obj);
console.log("obj,%d",obj);
console.log("obj,%s",obj);//obj,[object Object] string 格式化
console.log("obj,%d",obj.age);

