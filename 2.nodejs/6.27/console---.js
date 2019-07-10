/**
 * Created by Administrator on 2016/6/27.
 */
console.log("hi");
console.info("hello");
console.warn("xiao");
console.error("li");
//console.trace("sldjfsdoli");
//console.trace('errrrrrrrro');  //报错了

console.time("hello");
var index=0;
for(var i=0;i<10000;i++){
    index++;
}
//console.log(index);
//console.timeEnd("hello");
var a=Math.random();
var b=a*5+10;
var c=Math.floor(b);
 console.log(c);