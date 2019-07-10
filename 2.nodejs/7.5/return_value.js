var buf=new Buffer(256);
buf.fill(0);

/*
var len=buf.write("www.atguigu.com");
console.log(len);
console.log(buf);
console.log(buf.toString());
*/

var len=buf.write("尚硅谷");
console.log(len);
console.log(buf);
console.log(buf.toString());