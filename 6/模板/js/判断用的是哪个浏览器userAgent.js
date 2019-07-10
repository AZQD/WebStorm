var ua =window.navigator.userAgent;
			//alert(ua);
			if(/firefox/i.test(ua)){
				alert("火狐");
			}else if(/chrome/i.test(ua)){
				alert("谷歌");
			}else if("ActiveXObject" in window){
				alert("IE");
			}