
//属性 值：字符串
exports.name = 'wukong';

//属性 值：对象
exports.info = {
    home : '花果山',
    weapon : '金箍棒',
    car : '筋斗云'
};


function flyFun(kilometer) {
    var maxLength = 108000 / 2;
    if(kilometer < maxLength){
        console.log('我能飞 ', kilometer);
    }else {
        console.log('我一次最多能飞 ', maxLength);
    }
}
//属性 值：函数 （有名字的函数）
exports.fly = flyFun;

//属性 值：函数 （匿名函数）
exports.transformation =  function(){
    console.log('看我72变');
};


// 私有的变量 不能被外部访问
var nickName = '齐天大圣';  //nickName  诨号

// 私有的函数 不能被外部访问
function havoc(){       //单词： havoc ['hævək] vt. 严重破坏   vi. 损毁
    console.log('大闹天宫');
}
//这里不进行暴露，调用也不能发生作用。
//exports.havoc=havoc;

