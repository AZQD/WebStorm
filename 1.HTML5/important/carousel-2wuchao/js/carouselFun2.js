/**
 * Created by Administrator on 2016/6/30.
 */
function carouselFun2(obj1,obj2,obj3){

    //children 作用：获取当前节点的所有子元素（不包括文本节点）
    var nav=obj3.children;
    //console.log(nav);
    for(var i=0;i<obj2.length-2;i++) {
        obj3.innerHTML+="<a href='javascript:;'></a>"
    }


    //设置ul宽度  用百分比表示
    obj1.style.width=(obj2.length*100)+"%";
    //console.log(obj1.style.width);

    //设置li宽度  用百分比表示
    for(var i=0;i<obj2.length;i++){
        obj2[i].style.width=(100/obj2.length)+"%";
    }
    //console.log(obj2[0].style.width);

    //浏览器窗口改变时刷新页面
    window.onresize =function(){
        //判断是否为火狐
        var ua = window.navigator.userAgent;
        if(/firefox/i.test(ua)){

            //重新加载当前页面的资源，就是刷新本页面
            window.location=window.location; //火狐和谷歌支持，ie不支持
        }else {
            //reload() 方法用于重新加载当前文档。
            window.location.reload();//火狐不支持
        }
    };

    //获取图片宽度
    var imgWidth=parseFloat(getComputedStyle(obj2[0],null)["width"]);
    //设置初始位置
    obj1.style.transform="translateX("+(0-imgWidth)+"px"+")";

    var timer=null;

    //触屏切图
    var startX,endX;
    var num=1;
    innitA();
    ziDong();
    obj1.addEventListener("touchstart" ,function(event){
        var touches=event.targetTouches;
        if(touches.length==1){
            startX=touches[0].pageX;
            endX=0;
        }
    });

    obj1.addEventListener("touchmove" ,function(event){
        var touches=event.targetTouches;
        if(touches.length==1){
            endX=touches[0].pageX;
        }
    });


    obj1.addEventListener("touchend" ,function(event){
        if(endX==0){
            return;
        }
        //向左划
        if(startX>endX){
            clearInterval(timer);
            num++;
            innitA();
            obj1.style.transition="1s linear" ;
            obj1.style.transform="translateX("+(0-imgWidth*num)+"px"+")";
            ziDong();
            if(num==obj2.length-1){
                setTimeout(function(){
                    replay();
                },1001)

            }
        }
        //向右划
        if(startX<endX){
            clearInterval(timer);
            num--;
            innitA();
            obj1.style.transition="1s linear" ;
            obj1.style.transform="translateX("+(0-imgWidth*num)+"px"+")";
            ziDong();
            if(num==0){
                setTimeout(function(){
                    replays();
                },1001)
            }
        }


    });


    function replay(){
        num = 1;
        obj1.style.transition = "none";
        obj1.style.transform="translateX("+(0-imgWidth*num)+"px"+")";
    }

    function replays(){
        num = obj2.length-2;
        obj1.style.transition = "none";
        obj1.style.transform="translateX("+(0-imgWidth*num)+"px"+")";
    }
    //自动轮播
    function ziDong(){
        timer=setInterval(function(){
            num++;
            innitA();
            obj1.style.transition="1s linear" ;
            obj1.style.transform="translateX("+(0-imgWidth*num)+"px"+")";
            if(num==obj2.length-1){
                setTimeout(function(){
                    replay();
                },1001)
            }

        },3000)

    }
    //导航点样式

    function innitA(){
        for(var i=0;i<nav.length;i++){
            nav[i].style.backgroundColor="";
        }
        if(num<nav.length+1&&num>=1){
            nav[num-1].style.backgroundColor="red";
        }
        if(num==nav.length+1){
            nav[0].style.backgroundColor="red";
        }
        if(num==0){
            nav[nav.length-1].style.backgroundColor="red";
        }

    }

}