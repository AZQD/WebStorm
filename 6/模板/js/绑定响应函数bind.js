/*
		 * IE浏览器设计事件的理念是由内而外的
		 * 网景公司设计事件的理念是由外向内
		 * 
		 * IE没有捕获阶段，只有冒泡，一般情况下之会在冒泡阶段执行
		 * addEventListener ie8以下都不支持
		 * attachEvent 只支持IE10以下的浏览器
		 * addEventListener绑定的多个函数会按照绑定的顺序执行
				 * attachEvent绑定的多个函数会按照倒叙执行
				 * attachEvent绑定回调函数中的this永远都是window
		 */
			
			/*定义一个bind函数，用来为指定对象的指定事件绑定响应函数*/
			function bind(obj , eventStr , callBack){
				//判断obj中是否包含addEventListener
				if(obj.addEventListener){
					//如果addEventListener存在，则调用它来绑定事件
					obj.addEventListener(eventStr , callBack , false); 
					
				}else{ 
					
					//如果addEventListener不存在，则调用attachEvent
					//attachEvent绑定的事件响应函数中this永远是window
					
					obj.attachEvent("on"+eventStr,function(){
						callBack.call(obj);
					});
				}
				
			}
			
/*
 * 滚轮事件：也就是滑动鼠标滑轮：
正常浏览器：onmousewheel  不用bind函数。
//其他浏览器
向上滚120   向下滚是-120
length = ev.wheelDelta>0?-10:10;

火狐浏览器:DOMMouseScroll
只能通过addEventListener来绑定，因此用bind函数。
通过addEventListener绑定函数不能使用return false取消默认行为，需要用event.preventDefault();
//向下滚+3    向上滚-3
length = ev.detail>0?10:-10;

具体例子详见：day20-wheel.html
 * 
 */