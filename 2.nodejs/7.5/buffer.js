/*
var str='atguigu.com';
var buf=new Buffer(str);
console.log(buf);
console.log(buf.toString());
console.log(buf.toString("utf8"));
console.log(buf.toString("ascii"));
console.log(buf.toString("hex"));
console.log(buf.toString("base64"));
console.log(buf.toString("binary"));

buf[0]=41;
console.log(buf[0]);
console.log(buf.toString());*/

/*
var str='好好学习';
var buf=new Buffer(str);

console.log(buf);
console.log(buf.length);
console.log(buf.toString('utf8'));
console.log(buf.toString('hex'));
buf[0]=11111;
console.log(buf);
console.log(buf.toString());*/

/*
var str='红楼梦';
var buf1=new Buffer(str);

var buf2=new Buffer(str,'utf8');
console.log(buf1);
console.log(buf2);
console.log(buf1.length);
console.log(str.length);*/

/*
var str='红楼梦';
var buf=new Buffer(str);
console.log(buf);
buf[2]=11;  //是16进制数

console.log(buf);
console.log(0x22);// 转换为10进制*/

/*
var str='红楼梦';
var buf=new Buffer(str);
console.log(buf);
buf[3]=0x0a;
console.log(0x0a);
console.log(buf.toString());*/


var str='红楼梦';
console.log(Buffer.isEncoding('utf8'));
console.log(Buffer.isEncoding('hex'));
console.log(Buffer.isEncoding('gbk'));