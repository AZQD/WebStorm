/**
 * Created by raymo on 2016/6/21.
 */
window.onload=function() {
    var oBanner=document.querySelector('.banner');
    var oBannerBox=document.querySelector('.banner-box');
    var oApp=document.querySelector('.app');
    var oBoss=document.querySelector('.boss');
    var oLimit=document.querySelector('.limit-ul');
    var aImg1=oBanner.querySelectorAll('img');
    var aImg1Index={index:0};

    function getStyle(obj,attr) {
        return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr];
    }

    //轮播图
    touchCarousel(oBanner,aImg1Index,aImg1,oBannerBox);




    //oLimit滑动
    var startPoint=0;
    var endPoint=0;
    var left=0;
    var newTime=0;
    var oldTime=0;
    oLimit.addEventListener('touchstart',function(event){
        var touches=event.targetTouches;
        startPos=touches[0].pageX;
        endPos=0;
        startPoint=parseInt(getStyle(oLimit,'marginLeft'));
    },false);
    oLimit.addEventListener('touchmove',function(event){
        oldTime=new Date();
        oLimit.style.transition='none';
        var touches=event.targetTouches;
        endPos=touches[0].pageX;
        left=endPos - startPos;
        oLimit.style.marginLeft=startPoint+left+'px';
        if(parseInt(getStyle(oLimit,'marginLeft'))>0) {
            oLimit.style.marginLeft=0;
        }
        if(parseInt(getStyle(oLimit,'marginLeft'))<-740) {
            oLimit.style.marginLeft=-740+'px';
        }
        endPoint=parseInt(getStyle(oLimit,'marginLeft'));
    },false);
    oLimit.addEventListener('touchend',function() {
        newTime=new Date();
        if(newTime-oldTime<10) {
            oLimit.style.transition='.2s linear';
            var cur=endPoint+left;
            if(cur<-740) {
                cur=-740;
            }
            else if(cur>0) {
                cur=0;
            }
            oLimit.style.marginLeft=cur+'px';
        }
        else {
            return;
        }
    },false);





    var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
    var oSearch=document.querySelector('.search');
    //滚轮滚动
    document.onscroll=function() {
        scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollTop!=0) {
            oApp.style.display='none';
            oSearch.style.background='#c91523';
            oSearch.style.opacity='0.75';
        }
        else if(scrollTop==0){
            oSearch.style.background='rgba(255,255,255,0)';
        }
    };
    if(scrollTop!=0) {
        oApp.style.display='none';
        oSearch.style.background='#c91523';
        oSearch.style.opacity='0.75';
    }

    //倒计时
    setInterval(countDown,1000);
    countDown();
    function countDown() {
        var iNow=new Date();
        var iNew=new Date(2016,6,15,10,27,10);
        var t=Math.floor((iNew-iNow)/1000);
        /*转换为天    Math.floor(t/86400);
         转换为小时  Math.floor(t%86400/3600);
         转换为分    Math.floor(t%86400%3600/60);
         转换为秒   	t%60;*/
        var str='';
        var sec=t%60;
        if(sec<10) {
            sec='0'+sec;
        }
        var min=Math.floor(t%3600/60);
        if(min<10) {
            min='0'+min;
        }
        var hour=Math.floor(t/3600);
        if(hour<10) {
            hour='0'+hour;
        }
        str=hour+' : '+min+' : '+sec;

        var oEm=document.getElementsByTagName('em')[0];
        oEm.innerHTML=str;
    }


};






































