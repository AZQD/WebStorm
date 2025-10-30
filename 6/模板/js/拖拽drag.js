/*
			 * 拖拽
			 * 1.当鼠标按钮在目标元素上按下时开始拖拽 onmousedown
			 * 2.当鼠标移动时设置目标元素的位置 onmousemove
			 * 3.当鼠标按钮松开是结束拖拽onmouseup
			 *
			 * 当使用鼠标点击页面中的元素（文字、图片等），会使用浏览器默认的拖拽事件
			 */

			/*定义一个方法，专门用来为元素设置拖拽*/
			function drag(obj){
				console.log(34, obj);

				obj.onmousedown = function(ev){
					console.log(222, ev);

					//使当前元素捕获所有的事件
					try{
						obj.setCapture();
					}catch(e){
					}


					ev = ev || event

					//获取鼠标距离元素的上边距和左边距
					//鼠标clientY - box.offsetTop
					var disTop = ev.clientY - obj.offsetTop;

					//鼠标.clientX - box.offsetLeft
					var disLeft = ev.clientX - obj.offsetLeft;


					//当box的onmousedown触发时，绑定一个鼠标移动事件
					//将onmousemove绑定给box，移动移动出box，移动事件失效
					document.onmousemove = function(ev){
						console.log(33, ev);


						ev = ev || event;

						//获取一个位置
						var left = ev.clientX - disLeft;
						var top = ev.clientY - disTop;

						//获取右边界
						var maxLeft = document.documentElement.clientWidth - obj.offsetWidth;
						//获取下边界
						var maxTop = document.documentElement.clientHeight - obj.offsetHeight;


						//判断left是否小于0
						if(left < 10){
							left = 0;
						}else if(left > maxLeft-10){
							left = maxLeft;
						}

						if(top < 10){
							top = 0;
						}else if(top > maxTop-10){
							top = maxTop;
						}

						//当鼠标移动时，设置box的位置
						console.log(66, left, top);
						obj.style.left = left+"px";
						obj.style.top = top+"px";

					};

					//绑定一个鼠标松开事件
					document.onmouseup = function(){
						console.log(33334, ev);

						//松开鼠标时，我们希望元素不再跟随鼠标
						//清空鼠标移动事件
						document.onmouseup = document.onmousemove = null;

						//取消捕获事件
						try{
							obj.releaseCapture();
						}catch(e){
						}
					};


					//取消默认行为
					//取消默认行为这种方式对ie8以下的浏览器不起作用
					//但是经过验证，对ie的版本都起作用，老师可能说错了！！！
					return false;

				};
			}

			console.log(345, drag);
