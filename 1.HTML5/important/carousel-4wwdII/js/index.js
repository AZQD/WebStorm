/**
 * Created by raymo on 2016/6/21.
 */
//此方法变量比较多，提取函数适用性复杂，没有提取carouselFun4();
//所以，以后如果用到这个模式的轮播图，记得看整体HTML的结构和选择器的名称，可以
//写成相同的，便于套用操作。
window.onload=function() {
    var carousel=document.querySelector('.carousel');
    var box=document.querySelector('.box');
    var imgs=carousel.querySelectorAll('img');
	var navList=document.querySelector('.navList');
	
    var imgsIndex={index:0};
    var maxWidth=640;
    var minWidth=320;

    //初始化图片size
    imgResize();
    window.onresize=function() {
        imgResize();
        navList.style.marginLeft=(box.offsetWidth-navList.offsetWidth)/2+'px';
    }

    //定义size函数
    function imgResize() {
        for(var i=0;i<imgs.length;i++) {
            if(window.innerWidth>maxWidth) {
                imgs[i].style.width=maxWidth+'px';
            }
            else if(window.innerWidth>=minWidth && window.innerWidth<=maxWidth) {
                imgs[i].style.width=window.innerWidth+'px';
            }
            else if(window.innerWidth<minWidth) {
                imgs[i].style.width=minWidth+'px';
            }
        }
    }


    //创建轮播图的aList
    
    for(var i=0;i<imgs.length-1;i++) {
        navList.innerHTML+='<a></a>';
    }
    navList.style.marginLeft=(box.offsetWidth-navList.offsetWidth)/2+'px';
    var aList=navList.getElementsByTagName('a');
    //初始化aList
    aList[0].className='active';


    //第一个轮播图
    touch(carousel,imgsIndex,imgs,aList);

    autoTab(carousel,imgsIndex,imgs,aList);
    //后面的轮播图



	
	
	
		/*轮播图*/
	
	
		/*使用方法:
			自动轮播  autoTab(obj,pic,img,order)
			手指滑动  touch(obj,pic,img,order)
			1.第一个参数为要移动margin-left的ul
			2.第二个参数为图片的索引,图片的索引必须写为对象的形式而且对象中含有index属性
				例如:var aImg1index={index:0};
			3.第三个参数为ul中所有的图片
			4.第四个参数为下方的小圆点,其中CSS中必须要搭配有active的类名(如果没有小圆点,此参数可以不传)*/


		//控制小点切换
		function tab(pic,img,order) {
			if(order==undefined) {
				return;
			}
			for(var i=0;i<order.length;i++) {
				order[i].className='';
			}
			if(pic.index==img.length-1) {
				order[0].className='active';
			}
			else {
				order[pic.index].className='active';
			}
		}



		//控制自动轮播
		function autoTab(obj,pic,img,order) {
			obj.timer=setInterval(function() {
				pic.index++;
				if(pic.index==img.length) {
					obj.style.transition='none';
					obj.style.marginLeft=0+'px';
					pic.index=1;
				}
				tab(pic,img,order);
				setTimeout(function() {
					obj.style.transition='margin-left .3s ease';
					obj.style.marginLeft=-img[0].offsetWidth*pic.index+'px';
				},30);
			},2000);//轮播时间在此更改
		}


		//控制手指轮播
		function touch(obj,pic,img,order) {
			var startPos=0;
			var endPos=0;
			obj.addEventListener('touchstart',function(event){
				clearInterval(obj.timer);
				var touches=event.targetTouches;
				if(touches.length==1) {
					startPos=touches[0].pageX;
					endPos=0;
				}
			},false);
			obj.addEventListener('touchmove',function(event){
				var touches=event.targetTouches;
				if(touches.length==1) {
					endPos=touches[0].pageX;
				}
			},false);
			obj.addEventListener('touchend',function(event){
				obj.style.transition='margin-left .3s ease';
				if(endPos==0) {
					autoTab(obj,pic,img,order);
					return;
				}
				else if(endPos-startPos<0) {
					pic.index++;
					if(pic.index==img.length) {
						obj.style.transition='none';
						obj.style.marginLeft=0+'px';
						pic.index=1;
					}
					tab(pic,img,order);
					setTimeout(function() {
						obj.style.transition='margin-left .3s ease';
						obj.style.marginLeft=-img[0].offsetWidth*pic.index+'px';
					},30);
				}
				else if(endPos-startPos>0) {
					pic.index--;
					if(pic.index==-1) {
						obj.style.transition='none';
						obj.style.marginLeft=-img[0].offsetWidth*(img.length-1)+'px';
						pic.index=img.length-2;
					}
					tab(pic,img,order);
					setTimeout(function() {
						obj.style.transition='margin-left .3s ease';
						obj.style.marginLeft=-img[0].offsetWidth*pic.index+'px';
					},30);
				}
				autoTab(obj,pic,img,order);
			},false);
		}


}






































