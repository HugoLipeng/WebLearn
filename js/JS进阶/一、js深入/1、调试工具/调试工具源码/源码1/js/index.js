/**
 *  description : Chrome浏览器调试工具课程代码，其中cookie和定位可能需要配合服务器测试
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
	var imgSrc = "http://img.mukewang.com/577f7b680001a9c104680172.jpg";
	// 获取增加图片按钮
	var addNetImgBtn = document.getElementById("addNetImgBtn");
	// 绑定按钮事件
	addNetImgBtn.addEventListener("click" , function(){
		content.innerHTML = content.innerHTML 
		+ "<br/><img src='" + imgSrc +"?_="+ Date.now() +"'/>";
	});

	//==========================================================

	// 写入Cookie
	var addCookieBtn = document.getElementById("addCookieBtn");
	addCookieBtn.addEventListener("click" , function(){
		document.cookie = "imooc" + "=" + escape("慕课网");
		content.innerHTML = content.innerHTML + "<br/>" + "Cookie写入完成";
	});

	//==========================================================

	// 写入SessionStorage
	var addSessionStorageBtn = document.getElementById("addSessionStorageBtn");
	addSessionStorageBtn.addEventListener("click" , function(){
		window.sessionStorage.site  = 'http://www.imooc.com';
		window.sessionStorage.name  = '慕课网';
		content.innerHTML = content.innerHTML + "<br/>" + "SessionStorage写入完成";
	});

	//==========================================================

	// 写入LocalStorage
	var addLocalStorageBtn = document.getElementById("addLocalStorageBtn");
	addLocalStorageBtn.addEventListener("click" , function(){
		window.localStorage.site  = 'http://www.imooc.com';
		window.localStorage.name  = '慕课网';
		content.innerHTML = content.innerHTML + "<br/>" + "LocalStorage写入完成";
	});

	//==========================================================

	// 控制台输出
	var consoleBtn = document.getElementById("consoleBtn");
	consoleBtn.addEventListener("click" , function(){
		console.warn('慕课网');
		console.debug('慕课网');
		console.info('慕课网');
		console.error('慕课网');
		content.innerHTML = content.innerHTML + "<br/>" + "控制台输出完成";
	});

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