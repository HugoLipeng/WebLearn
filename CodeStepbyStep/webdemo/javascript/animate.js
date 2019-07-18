function animate(elem,targetJson,time){

	/*
		targetJson  {
			'left':'600px',
			'top':'700px'
		}
		总的时间有,我们可以假定运动间隔为50ms,那么总的运动次数maxcount可以求出
		我们需要根据targetJson求出最初对应的semaphoreJson ,然后求出步长stepJson
		有了三个json ,可以开始运动, 每次运动就在semaphoreJson加上一个stepJson,当运动次数达到maxcount的时候,拉终停表
	*/
	// 假定运动间隔为50ms
	var interval = 50;

	// 根据用户传入的时间 / interval 就是总次数
	var maxcount = time / interval;

	// 声明信号量(最初状态)json
	var semaphoreJson = {};
	// 根据targetJson求出最初的semaphoreJson
	for(var k in targetJson){
		// console.log(k);
		// 根据targetJson中k取出元素最初状态的数值
		semaphoreJson[k] = parseFloat(fetchComputedStyle(elem,k));

		// 顺带脚的就把targetJson中的px干掉
		targetJson[k] = parseFloat(targetJson[k]);
	}
	// console.log(semaphoreJson,targetJson);

	// 有了semaphoreJson,targetJson,可以求stepJson
	var stepJson = {};
	for(var k in targetJson){
		stepJson[k] = (targetJson[k] - semaphoreJson[k]) / maxcount;
	}

	// console.log(semaphoreJson,targetJson,stepjson);

	// 声明count记录运动次数
	var count = 0;
	// 到此三个json都有了,可以动起来了
	var timer = setInterval(function(){

		count++;
		// semaphoreJson每次加上一个stepJson
		for(var k in targetJson){
			if(k == 'opacity'){
				semaphoreJson[k] += stepJson[k];
				elem.style[k] = semaphoreJson[k];
				elem.style.filter = 'alpha(opacity=' + semaphoreJson[k]*100 +')'; 
			}else{
				semaphoreJson[k] += stepJson[k];
				elem.style[k] = semaphoreJson[k] + 'px';
			}
		}

		// 当步数够了,拉终停表,(直接把targetJson的值赋值给元素)
		if(count == maxcount){
			for(var k in targetJson){
				// 直接把targetJson的值赋值给元素
				if(k == 'opacity'){
					elem.style[k] = targetJson[k];
					elem.style.filter = 'alpha(opacity=' + semaphoreJson[k]*100 +')';
				}else{
					elem.style[k] = targetJson[k] + 'px';
				}
			}
			clearInterval(timer);
		}

	}, interval);

}

function fetchComputedStyle(obj , property){

	//能力检测
	if(window.getComputedStyle){
		
		//现在要把用户输入的property中检测一下是不是驼峰，转为连字符写法
		//强制把用户输入的词儿里面的大写字母，变为小写字母加-
		//paddingLeft  →  padding-left
		property = property.replace(/([A-Z])/g , function(match,$1){
			
			return "-" + $1.toLowerCase();
		});

		return window.getComputedStyle(obj)[property];
	}else{
		//IE只认识驼峰，我们要防止用户输入短横，要把短横改为大写字母
		//padding-left  → paddingLeft 
		property = property.replace(/\-([a-z])/g , function(match,$1){
			return $1.toUpperCase();
		});

		return obj.currentStyle[property];
	}
}