/**
 * Created by Administrator on 2016/7/29.
 */
function Queue(){
    this.arr = [];
}

//加入队列
//写item或者ele，比较专业
Queue.prototype.enqueue = function(item){
    this.arr.push(item);
};
//读取队列元素
Queue.prototype.first = function(){
    return this.arr[0];
};
//移出队列元素
Queue.prototype.dequeue = function (){
    return this.arr.shift();
};
//清理队列
Queue.prototype.clear = function(){
    this.arr = [];
};
//得到队列的长度
Queue.prototype.size = function(){
    return this.arr.length;
};
//判断队列是否是空的
Queue.prototype.isEmpty = function(){
    return this.arr.length === 0;
};