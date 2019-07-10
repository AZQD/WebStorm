/*提取一个函数用来处理动态效果*/
/*
 * 目前我们使用的timer是一个公共的变量所有动态效果都使用同一个timer
 * 这样会导致一个元素会影响到其他元素
 */
function move(obj, attr, target, speed, callBack) {
	//需要为每一个元素指定一个自己的timer来保存定时器
	//创建定时器之前，停止之前的定时器
	clearInterval(obj.timer);

	obj.timer = setInterval(function() {
		//使box1移动，实际上就是在不同的修改box1的left属性
		//获取box1原有的left属性值
		var oldValue = parseInt(getStyle(obj, attr));
		//判断元素的移动方向
		//判断oldValue 和 target之间的关系
		if (oldValue > target) {
			//向左移动
			//修改left属性值
			var newValue = oldValue - speed;
			//如果新的值小于目标值，则让新值等于目标值
			if (newValue < target) {
				newValue = target;
			}
		} else {
			//向右移动
			var newValue = oldValue + speed;
			//在赋值之前判断
			if (newValue > target) {
				newValue = target;
			}

		}

		//修改box1的left属性值
		obj.style[attr] = newValue + "px";

		//如果box1的left属性值是800px时，则停止定时器
		if (newValue == target) {
			//停止定时器
			clearInterval(obj.timer);

			//判断是否有回调函数，如果有则调用，如果没有就不调用
			if (callBack) {
				//调用回调函数
				callBack();
			}
		}

	}, 30);

};

/*定义一个方法，动态的获取元素的指定的样式*/
/*
 * 需要两个参数，第一个是要获取样式的对象，第二个是要获取的样式的名字
 * 如果使用该函数获取没有定义的样式，会返回浏览器的默认值，有可能会有问题
 */
function getStyle(obj, attr) {

	try {
		return getComputedStyle(obj, null)[attr];
	} catch (e) {
		return obj.currentStyle[attr];
	}

}