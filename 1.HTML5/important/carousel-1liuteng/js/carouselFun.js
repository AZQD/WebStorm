/**
 * Created by Administrator on 2016/6/30.
 */
function carouselFun(obj1,obj2){

    var maxWidth=640;
    var minWidth=320;
    var mainImgWidth=0;
    var pageXStart=0;
    var pageXEnd=0;
    var index=0;

    //每次刷新页面，需要重置Img的宽度
    resizeImgWidth();
    window.onresize=function(){
        //每次浏览器调整视窗的时候，需要重置Img的宽度
        resizeImgWidth();
    };

    obj1.addEventListener("touchstart",function(event){
        var touches=event.targetTouches;
        pageXStart=touches[0].pageX;
        pageXEnd=0;
        //console.log(pageXStart);
    },false);
    obj1.addEventListener("touchmove",function(event){
        var touches=event.targetTouches;
        pageXEnd=touches[0].pageX;
        //console.log(pageXEnd);
    },false);
    obj1.addEventListener("touchend",function(){
        if(pageXEnd==0){
            return;
        }
        //手指向左滑动
        if((pageXEnd-pageXStart)<0){
            index++;
            if(index>=obj2.length-1){
                obj1.style.marginLeft=(0-index*mainImgWidth)+"px";
                setTimeout(function(){
                    obj1.style.transition="none";
                    obj1.style.marginLeft=0;
                    //理解思路时，把下面的注释打开，看控制台变化。
                    //console.log(index);
                    //console.log(obj1.style.marginLeft);
                    index=0;
                },1000);
            }
            obj1.style.transition="1s linear";
            obj1.style.marginLeft=(0-index*mainImgWidth)+"px";
            //理解思路时，把下面的注释打开，看控制台变化。
            //console.log(index);
            //console.log(obj1.style.marginLeft);
        }

        //手指向右滑动
        if((pageXEnd-pageXStart)>0){
            index--;
            if(index<0){
                obj1.style.transition="none";
                obj1.style.marginLeft=(0-(obj2.length-1)*mainImgWidth)+"px";
                //理解思路时，把下面的注释打开，看控制台变化。
                //console.log(index);
                //console.log(obj1.style.marginLeft);
                index=obj2.length-2;
                setTimeout(function(){
                    obj1.style.transition="1s linear";
                    obj1.style.marginLeft=(0-index*mainImgWidth)+"px";
                    //理解思路时，把下面的注释打开，看控制台变化。
                    //console.log(index);
                    //console.log(obj1.style.marginLeft);
                },1);
                return;
            }
            obj1.style.marginLeft=(0-index*mainImgWidth)+"px";
        }

    },false);




    function resizeImgWidth(){

        //就是当前HTML文档宽度
        var currentWidth=window.innerWidth;
        if(currentWidth >= maxWidth){
            //1如果屏幕足够大，图片宽度 640
            mainImgWidth=maxWidth;
            //console.log(currentWidth);
        }
        if(currentWidth > minWidth && currentWidth < maxWidth){
            //2、如果屏幕宽度再320 --- 640之间，应该自适应，就是可视宽度。
            mainImgWidth=currentWidth;
            //console.log(currentWidth);
        }
        if(currentWidth <= minWidth){
            //3、如果屏幕宽度小于320，宽度就是320
            mainImgWidth=minWidth;
            //console.log(currentWidth);
        }
        for(var i=0;i<obj2.length;i++){
            obj2[i].style.width=mainImgWidth+"px";
        }
        //console.log(obj2[1].style.width);

    }

}