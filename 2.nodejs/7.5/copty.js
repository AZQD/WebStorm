var buffer1=new Buffer('ABCDEFG');
var buffer2=new Buffer(5);
buffer2.fill(0);
console.log(buffer1);
var result=buffer1.copy(buffer2);
console.log(buffer2.toString());
console.log(result);

console.log('*********************');

var buffer3=new Buffer(5);
buffer3.fill('_');
console.log(buffer3);
buffer1.copy(buffer3,3);
console.log(buffer3.toString());


/*console.log('*********************');
var buffer4=new Buffer(5);
buffer4.fill('_');
buffer1.copy(buffer4,3,2);
console.log(buffer4.toString());*/


console.log('*********************');
var buffer4=new Buffer(50);
buffer4.fill('_');
var result=buffer1.copy(buffer4,3,2,buffer1.length-2);
console.log(buffer4.toString());
console.log(result);
