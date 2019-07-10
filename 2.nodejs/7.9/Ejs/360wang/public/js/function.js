/**
 * Created by raymond on 2016/6/23.
 */

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
            obj.style.transform='translate3d(0,0,0)';
            pic.index=1;
        }
        tab(pic,img,order);
        setTimeout(function() {
            obj.style.transition='.3s ease';
            obj.style.transform='translate3d('+(-img[0].offsetWidth*pic.index)+'px'+',0,0)';
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
        obj.style.transition='.3s ease';
        if(endPos==0) {
            autoTab(obj,pic,img,order);
            return;
        }
        else if(endPos-startPos<0) {
            pic.index++;
            if(pic.index==img.length) {
                obj.style.transition='none';
           		obj.style.transform='translate3d(0,0,0)';
                pic.index=1;
            }
            tab(pic,img,order);
            setTimeout(function() {
                obj.style.transition='.3s ease';
            	obj.style.transform='translate3d('+-img[0].offsetWidth*pic.index+'px'+',0,0)';
            },30);
        }
        else if(endPos-startPos>0) {
            pic.index--;
            if(pic.index==-1) {
                obj.style.transition='none';
            	obj.style.transform='translate3d('+-img[0].offsetWidth*(img.length-1)+'px'+',0,0)';
                pic.index=img.length-2;
            }
            tab(pic,img,order);
            setTimeout(function() {
                obj.style.transition='.3s ease';
            	obj.style.transform='translate3d('+-img[0].offsetWidth*pic.index+'px'+',0,0)';
            },30);
        }
        autoTab(obj,pic,img,order);
    },false);
}
