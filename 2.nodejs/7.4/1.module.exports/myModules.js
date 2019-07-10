/**
 * Created by Administrator on 2016/7/4.
 */
/**
 * Created by Administrator on 2016/7/4.
 */

console.log(exports);//{}
console.log(module.exports);//{}
console.log(exports===module.exports ? "相等":"不相等" );
console.log('exports===module.exports ? ',exports===module.exports);
console.log("henan","kaifeng");
exports.company='Alibaba';
console.log(module.exports);//{ company: 'Alibaba' }
console.log(exports); //{ company: 'Alibaba' }
console.log(module.exports===exports);