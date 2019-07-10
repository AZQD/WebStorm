window.onload=function(){
    //轮播图
    var banner_ul=document.getElementById("banner_ul");
    var banner=document.querySelector(".banner");
    var banner_li=document.querySelectorAll(".banner_li");
    var navPoint=document.getElementById("navPoint");
    var nav=navPoint.children;
    for(var i=0;i<banner_li.length-2;i++) {
        navPoint.innerHTML+="<a href='javascript:;'></a>"
    }



    //设置ul宽度
    banner_ul.style.width=(banner_li.length*100)+"%";

    //设置li宽度
     for(var i=0;i<banner_li.length;i++){
        banner_li[i].style.width=(100/banner_li.length)+"%";
    }

    //浏览器窗口改变时刷新页面
    window.onresize =function(){
        //判断是否为火狐
        var ua = window.navigator.userAgent;
        if(/firefox/i.test(ua)){
            location=location; //火狐和谷歌支持，ie不支持
        }else {
            location.reload();//火狐不支持
        }
    };

        //获取图片宽度
        var imgWidth=parseFloat(getComputedStyle(banner_li[0],null)["width"]);
        //设置初始位置
        banner_ul.style.transform="translateX("+(0-imgWidth)+"px"+")";

        var timer=null;

        //触屏切图
        var startX,endX;
        var num=1;
         innitA();
        ziDong();
        banner_ul.addEventListener("touchstart" ,function(event){
            var touches=event.targetTouches;
            if(touches.length==1){
                startX=touches[0].pageX;
                endX=0;
            }
        });

        banner_ul.addEventListener("touchmove" ,function(event){
            var touches=event.targetTouches;
            if(touches.length==1){
                endX=touches[0].pageX;
            }
        });


        banner_ul.addEventListener("touchend" ,function(event){
            if(endX==0){
                return;
            }
            //向左划
            if(startX>endX){
                clearInterval(timer);
                num++;
                innitA();
                banner_ul.style.transition="1s linear" ;
                banner_ul.style.transform="translateX("+(0-imgWidth*num)+"px"+")";
                ziDong();
                if(num==banner_li.length-1){
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
                banner_ul.style.transition="1s linear" ;
                banner_ul.style.transform="translateX("+(0-imgWidth*num)+"px"+")";
                ziDong();
                if(num==0){
                    setTimeout(function(){
                        replays()
                    },1001)
                }
            }


        });


        function replay(){
            num = 1;
            banner_ul.style.transition = "none";
            banner_ul.style.transform="translateX("+(0-imgWidth*num)+"px"+")";
        }

        function replays(){
            num = banner_li.length-2;
            banner_ul.style.transition = "none";
            banner_ul.style.transform="translateX("+(0-imgWidth*num)+"px"+")";
        }
        //自动轮播
        function ziDong(){
            timer=setInterval(function(){
                num++;
                innitA();
                banner_ul.style.transition="1s linear" ;
                banner_ul.style.transform="translateX("+(0-imgWidth*num)+"px"+")";
                if(num==banner_li.length-1){
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


};















