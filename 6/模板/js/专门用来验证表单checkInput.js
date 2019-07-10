//定义一个函数，专门用来验证表单
			function checkInput(obj , reg , rightMsg , errorMsg){
				//获取用户填写的内容
				var text = obj.value;
				
				//获取span
				var span = obj.parentNode.getElementsByTagName("span")[0];
				
				//检查是否符合规范
				if(!reg.test(text)){
					
					//电子邮件格式错误
					span.innerHTML = errorMsg;
					//设置一个红色
					span.style.color = "red";
					//如果没有通过验证，返回一个false
					return false;
				}else{
					//符合规则
					//电子邮件格式正确
					span.innerHTML = rightMsg;
					//设置一个红色
					span.style.color = "green";
					//如果通过验证返回一个true
					return true;
				}
			}