



//touch轮播
function touchCarousel(obj,index,img,oParent) {
	
    //创建小点
    var oDiv=document.createElement('div');
    for(var i=0;i<img.length-1;i++) {
        var oA=document.createElement('a');
        oA.style.display='inline-block';
        oA.style.width=8+'px';
        oA.style.height=8+'px';
        oA.style.marginLeft=8+'px';
        oA.style.borderRadius=4+'px';
        oA.style.border='1px solid white';
        oDiv.appendChild(oA);
    }
    oParent.appendChild(oDiv);
    oParent.style.position='relative';
    oDiv.style.position='absolute';
    oDiv.style.bottom=10+'px';
    oDiv.style.marginLeft=(oParent.offsetWidth-oDiv.offsetWidth)/2+'px';
    var aA=oDiv.querySelectorAll('a');
    aA[0].style.backgroundColor='white';
	
	//图片宽度初始化
    resizeImgWidth();

	//窗口尺寸变化让小点与图片自适应,同时消除图片显示bug
    window.addEventListener('resize',function() {
        oDiv.style.marginLeft=(oParent.offsetWidth-oDiv.offsetWidth)/2+'px';
        resizeImgWidth();
        clearInterval(obj.timer);
        obj.style.transition='none';
        obj.style.transform='translate3d('+(-img[0].offsetWidth*index.index)+'px'+',0,0)';
        setTimeout(function() {
        	obj.style.transition=".3s linear";
        auto();
        },30);
    },false);


    //初始化位置
    var startPageX = 0;
    var endPageX = 0;
	var left=0;
	var iNow=0;
	var iNew=0;
    obj.style.transform='translate3d(0,0,0)';
    var reg=/-?\d+/ig;
    
	
	
	//touch事件
    obj.addEventListener("touchstart",function(event) {
        var  touches = event.targetTouches;
        clearInterval(obj.timer);
        if(touches.length == 1) {
            startPageX = touches[0].pageX;
            endPageX = 0;
        }
    },false);
    obj.addEventListener("touchmove",function(event) {
    	iNow=new Date();
        var  touches = event.targetTouches;
        if(touches.length == 1) {
            endPageX = touches[0].pageX;
            obj.style.transition='none';
			
			//拖动偏移量
	        left=parseInt((endPageX-startPageX));
	        //跟随拖动
            obj.style.transform='translate3d('+((-img[0].offsetWidth*index.index)+left)+'px'+',0,0)';
	        //从第一张向右拖动
	        if(obj.style.transform.match(reg)[1]>0) {
          		obj.style.transform='translate3d('+((-img[0].offsetWidth*(img.length-1))+left)+'px'+',0,0)';
	        }
	        //从最后一张向右滑动
	        else if(obj.style.transform.match(reg)[1]<-(img.length-1)*img[0].offsetWidth) {
          		obj.style.transform='translate3d('+left+'px'+',0,0)';
	        }
        }
    },false);
    obj.addEventListener("touchend",function(event) {
    	iNew=new Date();
        if (endPageX == 0) {
            auto();
            return;
        }
        //拖动时间大于10ms
        else if(iNew-iNow>10) {
        	//拖动距离小于四分之一
	        if(Math.abs(left)<=(img[0].offsetWidth/4)) {
	        	//向右拖动
	         	if(endPageX - startPageX > 0) {
	         		//第一张向右拖动变到最后一张
	         		if(obj.style.transform.match(reg)[1]<-(img.length-2)*img[0].offsetWidth) {
	         			obj.style.transition = ".3s linear";
            			obj.style.transform='translate3d('+(-img[0].offsetWidth*(img.length-1))+'px'+',0,0)';
		           		//回到第一张
		           		if(obj.style.transform.match(reg)[1]== - (img[0].offsetWidth*(img.length-1))) {
		           			setTimeout(function() {
		           				obj.style.transition = "none";
            					obj.style.transform='translate3d(0,0,0)';
		           			},290)
		           		}
	         		}
	         		//普通
	         		else {
	         			obj.style.transition = ".3s linear";
            			obj.style.transform='translate3d('+(-img[0].offsetWidth*index.index)+'px'+',0,0)';
	         		}
	       		}
	         	//向左拖动
	         	else {
	         		//从最后一张向左拖动变到第一张
		            if(obj.style.transform.match(reg)[1]>-img[0].offsetWidth) {
		            	obj.style.transition = ".3s linear";
            			obj.style.transform='translate3d(0,0,0)';
		            }
		            //普通
	         		else {
	         			obj.style.transition = ".3s linear";
            			obj.style.transform='translate3d('+(-img[0].offsetWidth*index.index)+'px'+',0,0)';
	         		}
	         	}
	        }
	        
	        //拖动距离大于四分之一
	        else if(Math.abs(left)>=(img[0].offsetWidth/4)) {
	        	go();
		    }
        }
        //拖动时间小于10ms
        else {
        	go();
        }
        auto();
    },false);
    
    
    //控制自动轮播
    function  auto() {
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            index.index  += 1;
            if(index.index == img.length) {
                index.index = 1;
                obj.style.transition = "none";
            	obj.style.transform='translate3d(0,0,0)';
            }
            tab();
            setTimeout(function() {
                obj.style.transition = ".3s linear";
            	obj.style.transform='translate3d('+(-img[0].offsetWidth*index.index)+'px'+',0,0)';
            },30)
        },3000);
    }
    auto();
    
    
    //小点自动切换
    function tab() {
        for(var i=0;i<aA.length;i++) {
            aA[i].style.backgroundColor = "";
            if(index.index == img.length -1) {
                aA[0].style.backgroundColor = "white";
            }
            else {
                aA[index.index].style.backgroundColor = "white";
            }
        }
    }
    
    //获取属性
	function getStyle(obj,attr) {
    	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr];
	}

	//图片自适应
	function resizeImgWidth() {
	    for(var i=0;i<img.length;i++) {
	       img[i].style.width=getStyle(oParent,'width');
	       //img[i].style.height=getStyle(oParent,'height');
	    }
	}
	//滑向下一张
	function go() {
		//向左拖动
        if(endPageX - startPageX < 0) {
        	//最后一张向左拖动
        	if(obj.style.transform.match(reg)[1]>-img[0].offsetWidth) {
        		obj.style.transition = ".3s linear";
            	obj.style.transform='translate3d('+(-img[0].offsetWidth)+'px'+',0,0)';
                index.index=1;
                tab();
        	}
        	//普通
       		else {
        		obj.style.transition = ".3s linear";
            	obj.style.transform='translate3d('+(-img[0].offsetWidth*(index.index+1))+'px'+',0,0)';
            	index.index++;
	            if(index.index == img.length) {
	                index.index = 1;
	            }
	            tab();
            }
        }
        //向右拖动
        else {
        	//从第一张向右拖动
        	if(obj.style.transform.match(reg)[1]<-(img.length-2)*img[0].offsetWidth) {
        		obj.style.transition = ".3s linear";
            	obj.style.transform='translate3d('+(-img[0].offsetWidth*(img.length-2))+'px'+',0,0)';
            	index.index=img.length-2;
            	tab();
        	}
        	//普通
        	else {
        		obj.style.transition = ".3s linear";
            	obj.style.transform='translate3d('+(-img[0].offsetWidth*(index.index-1))+'px'+',0,0)';
	            index.index--;
	            if(index.index==-1) {
	            	index.index=img.length-2;
	            }
	            tab();
        	}
        }
	}
	
}
