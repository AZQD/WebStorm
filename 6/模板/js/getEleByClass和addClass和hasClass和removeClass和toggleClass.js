/*创建一个方法，用来根据class属性值获取元素节点的数组*/

			function getEleByClass(cn){
				//定义一个数组，用来保存结果
				var result = [];
				
				//定义一个正则表达式检查是否包含指定的class
				// \b单词\b
				var reg = new RegExp("\\b"+cn+"\\b");

				//查询所有的元素
				var allEles = document.all;
				//遍历所有的元素
				for(var i=0 ; i<allEles.length ; i++){
					//判断当前的元素的className属性是否和cn匹配
					var className = allEles[i].className;
					
					//判断className和cn是否相等
					if(reg.test(className)){
						//将元素添加到结果中
						result.push(allEles[i]);
					}
				}

				
				return result;
			}
			
				/*
				 调用时可以这样写，计算数数组的长度等：
				 			var arr = getEleByClass("hello");
							alert(arr.length)
				 * */
				/*getElementsByClassName()对IE8及以下不可用，所以需要重新定义一个函数来获取class。*/

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