/**
 *  description : Chrome浏览器调试工具课程代码
 *	author : bling
 */
function main(){

	// 内容动态填充区域
	var content = document.getElementById("content");

	//==========================================================

	// 获取增加文本按钮
	var addTextBtn = document.getElementById("addTextBtn");
	// addEventListener需要IE9+支持，IE9-请使用attachEvent或者onXXX
	addTextBtn.addEventListener("click" , function(){
		content.innerHTML = content.innerHTML + "<br/>" + Date.now();
	});

	//==========================================================

	// 网络图片路径
	var netImgSrc = "http://img.mukewang.com/577f7b680001a9c104680172.jpg";
	// 获取增加图片按钮
	var addNetImgBtn = document.getElementById("addNetImgBtn");
	// 绑定按钮事件
	addNetImgBtn.addEventListener("click" , function(){
		content.innerHTML = content.innerHTML 
		+ "<br/><img src='" + netImgSrc +"?_="+ Date.now() +"'/>";
	});

	//==========================================================

	// 写入Cookie
	var addCookieBtn = document.getElementById("addCookieBtn");
	addCookieBtn.addEventListener("click" , function(){
		document.cookie = "imooc=www.imooc.com;expires=2016-07-20 10:10:10";
		content.innerHTML = "Cookie写入完成";
	});
	// 获取Cookie
	var getCookieBtn = document.getElementById("getCookieBtn");
	getCookieBtn.addEventListener("click" , function(){
		content.innerHTML = "Cookie获取完成：<br/>" + document.cookie;
	});
	// 清除Cookie
	var clearCookieBtn = document.getElementById("clearCookieBtn");
	clearCookieBtn.addEventListener("click" , function(){
		document.cookie = "imooc=www.imooc.com;expires=2016-07-18 10:10:10";
		content.innerHTML = "Cookie清除完成";
	});

	//==========================================================

	// 写入SessionStorage
	var addSessionStorageBtn = document.getElementById("addSessionStorageBtn");
	addSessionStorageBtn.addEventListener("click" , function(){
		window.sessionStorage.setItem('site','http://www.imooc.com');
		window.sessionStorage.setItem('name','慕课网');
		content.innerHTML = "SessionStorage写入完成";
	});
	// 获取SessionStorage
	var getSessionStorageBtn = document.getElementById("getSessionStorageBtn");
	getSessionStorageBtn.addEventListener("click" , function(){
		var site = window.sessionStorage.getItem('site');
		var name = window.sessionStorage.getItem('name');
		content.innerHTML = "SessionStorage获取完成：<br/>" + name + "<br/>" + site;
	});
	// 清除SessionStorage
	var clearSessionStorageBtn = document.getElementById("clearSessionStorageBtn");
	clearSessionStorageBtn.addEventListener("click" , function(){
		window.sessionStorage.removeItem('site');
		window.sessionStorage.removeItem('name');
		content.innerHTML = "SessionStorage清除完成";
	});

	//==========================================================

	// 写入LocalStorage
	var addLocalStorageBtn = document.getElementById("addLocalStorageBtn");
	addLocalStorageBtn.addEventListener("click" , function(){
		window.localStorage.setItem('site','http://www.imooc.com');
		window.localStorage.setItem('name','慕课网');
		content.innerHTML = "LocalStorage写入完成";
	});
	// 获取SessionStorage
	var getLocalStorageBtn = document.getElementById("getLocalStorageBtn");
	getLocalStorageBtn.addEventListener("click" , function(){
		var site = window.localStorage.getItem('site');
		var name = window.localStorage.getItem('name');
		content.innerHTML = "LocalStorage获取完成：<br/>" + name + "<br/>" + site;
	});
	// 清除LocalStorage
	var clearLocalStorageBtn = document.getElementById("clearLocalStorageBtn");
	clearLocalStorageBtn.addEventListener("click" , function(){
		window.localStorage.removeItem('site');
		window.localStorage.removeItem('name');
		content.innerHTML = "LocalStorage清除完成";
	});

	//==========================================================

	// 控制台输出
	var consoleBtn = document.getElementById("consoleBtn");
	consoleBtn.addEventListener("click" , function(){
		console.warn('warn：欢迎来到慕课网学习');
		console.debug('debug：欢迎来到慕课网学习');
		console.info('info：欢迎来到慕课网学习');
		console.error('error：欢迎来到慕课网学习');
		console.log('log：欢迎来到慕课网学习');
		content.innerHTML = "控制台输出完成";
	});

	//==========================================================

	// 断点调试
	var breakPointBtn = document.getElementById("breakPointBtn");
	breakPointBtn.addEventListener("click" , function(){
		// 控制台输出
		console.debug("断点调试开始了……");
		// 定义两个变量
		var name = "name";
		var value = "http://www.imooc.com";
		// 做一些其他工作
		for(var i=0;i<10;i++){
			if(i==5){
				console.debug("选中了");
			}else{
				console.debug(i);
			}
		}
		// 执行一个函数
		breakPoint(name , value);
		// 控制台输出
		console.debug("断点调试结束了……");
	});
	
	// 断点调试函数
	function breakPoint(name , value){
		// 控制台输出
		console.log("name:" + name + ",value=" + value);
		// 本地存储
		window.sessionStorage.setItem(name,value);
		window.localStorage.setItem(name,value);
	} 

	//==========================================================

	// 获取经纬度
	var monitorGpsBtn = document.getElementById("monitorGpsBtn");
	monitorGpsBtn.addEventListener("click" , function(){
		var text = '';
		if (navigator.geolocation){
			content.innerHTML = content.innerHTML + "<br/>" + "正在定位···";
	    	navigator.geolocation.getCurrentPosition(function(position){
	    		var lat = position.coords.latitude;
	    		var lng =  position.coords.longitude;
	    		text = "定位成功：经纬度" + lat + " , " + lng;
	    	} , function(){
	    		text = "定位失败";
	    	});
	    }
	  	else{
	  		text = "不支持定位";
	  	}

	  	content.innerHTML = content.innerHTML + "<br/>" + text;
	});

}

// 调用函数
main();