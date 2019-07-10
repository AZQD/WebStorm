/**
 * Created by Administrator on 2016/7/3.
 */

//这里面有几个数字是变量，如果换用其他图片，注意修改数字。
function carousel_PC(obj1,obj2,obj3,obj4){

    obj1.style.width=520*obj2.length+"px";
    //alert(obj1.style.width);
    for(var i=0;i<obj2.length-1;i++){
        obj3.innerHTML+='<a href="javascript:;"></a>';
    }
    //offsetParent --> 获取当前元素的定位元素
    //此时也可以用parentNode 获取当前节点的父节点
    obj3.style.left=(obj3.offsetParent.offsetWidth-obj3.offsetWidth)/2+"px";
    var num=0;
    var timer=0;
    initA();
    autoChange();
    for(var i=0;i<obj4.length;i++){
        obj4[i].onclick=function(index){
            return function(){
                clearInterval(timer);
                num=index;
                initA();
                move(obj1,"left",-520*index,10,function(){
                    autoChange();
                });
            };
        }(i);
    }

    function autoChange(){
        timer=setInterval(function(){
            num++;
            if(num>=obj2.length){
                num=0;
            }
            move(obj1,"left",-520*num,10,function(){
                initA();
            });
        },2000);
    }

    function initA(){
        if(num>obj2.length-1){
            obj1.style.left=0;
            num=0;
        }

        for(var i=0;i<obj4.length;i++){
            obj4[i].style.backgroundColor="";
        }
        obj4[num].style.backgroundColor="black";
    }

}