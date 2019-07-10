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

/*创建一个方法，用来根据class属性值获取元素节点的数组*/
function getEleByClass(cn) {
	//顶一个数组，用来保存结果
	var result = [];

	//定义一个正则表达式检查是否包含指定的class
	// \b单词\b
	var reg = new RegExp("\\b" + cn + "\\b");

	//查询所有的元素
	var allEles = document.all;
	//遍历所有的元素
	for (var i = 0; i < allEles.length; i++) {
		//判断当前的元素的className属性是否和cn匹配
		var className = allEles[i].className;

		//判断className和cn是否相等
		if (reg.test(className)) {
			//将元素添加到结果中
			result.push(allEles[i]);
		}
	}

	return result;
}

//创建一个函数，专门用来向元素中添加class
function addClass(obj, cn) {
	//如果已经有了该class了，则不再添加
	if (!hasClass(obj, cn)) {
		//如果没有该class，则添加
		obj.className += " " + cn;
	}

}

//判断当前元素中是否包含某个class属性
function hasClass(obj, cn) {
	//获取obj的class
	var className = obj.className;
	//创建正则表达式
	var cnReg = new RegExp("\\b" + cn + "\\b");

	return cnReg.test(className);

}

//从元素中移除一个class
function removeClass(obj, cn) {

	//创建正则表达式
	var cnReg = new RegExp("\\b" + cn + "\\b");

	obj.className = obj.className.replace(cnReg, "");
}

//切换一个元素的class，如果当前元素有该class，则删除
//如果没有，则添加
function toggleClass(obj, cn) {

	//判断当前类是否包含cn
	if (hasClass(obj, cn)) {
		//包含当前cn,删除
		removeClass(obj, cn);
	} else {
		//不包含当前class，添加
		addClass(obj, cn);
	}

}