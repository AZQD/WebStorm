/*
	 * 提出删除tr的单击响应函数
	 * tr和td和a的关系是如下关系，如果是其他关系，下面的parentNode需要做微调整。
	 * <tr>
			<td>Tom</td>
			<td>tom@tom.com</td>
			<td>5000</td>
			<td><a href="deleteEmp?id=001">Delete</a></td>
		</tr>
	 * 
	 * 
	 */
	
	function delA(ev){
		
		ev = ev || event;
		
		//判断当前元素是否是a
		if(ev.target.nodeName.toLowerCase() == "a"){
				
				//在这个响应函数里，用户点击哪个超链接this就是哪个a元素
				//点击超链接以后删除当前超链接所在的一行数据
				//获取当元素的所在tr
				var tr = ev.target.parentNode.parentNode;
				
				//获取要删除的员工的姓名
				var name = tr.getElementsByTagName("td")[0].innerHTML;
				
				/*
				 * 浏览器在渲染表格时，会自动在table中添加一个tbody，然后所有的tr都会放到tbody
				 * 所以tr的实际的父元素是tbody，而不是table
				 */
				//alert(tr.parentNode);
				
				//弹出一个确认框
				var flag = confirm("确认删除"+name+"的信息吗?");
				
				//判断flag的值是否为true
				if(flag){
					//删除tr
					tr.parentNode.removeChild(tr);
				}
				
				//取消a的默认行为
				//当我们在响应函数中返回一个false时可以取消指定元素的默认的行为
				return false;
		
		}
	};