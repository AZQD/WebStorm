function getStyle(obj,attr){
				
				try{
					//getComputedStyle支持火狐，chorme，IE9及以上
					return getComputedStyle(obj,null)[attr];
				}catch(e){
					//currentStyle这个属性只有IE支持，可以获取元素的样式
					return obj.currentStyle[attr];
				}
				
			}

//alert(box.style.width); 这种方式只能获取内敛样式，
而上面的getComputedStyle和currentStyle可以读取到内敛样式和外部样式。