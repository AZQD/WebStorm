/**
 * Created by Administrator on 2016/7/29.
 */
function Stack(){
    this.arr = [];
}

//压栈
//写item或者ele，比较专业
Stack.prototype.push = function (ele){
    this.arr.push(ele);
};

//查看栈顶元素
Stack.prototype.peek = function(){
    return this.arr[this.arr.length - 1];
};
//出栈
Stack.prototype.pop = function(){
    return this.arr.pop();
};
//清栈
Stack.prototype.clear = function (){
  this.arr = [];
};
//大小
Stack.prototype.size = function(){
    return this.arr.length;
};
//判断是否清空
Stack.prototype.isEmpty = function(){
    return this.arr.length ===0;
};

