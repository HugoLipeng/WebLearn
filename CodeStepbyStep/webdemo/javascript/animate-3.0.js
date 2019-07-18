// version2.0
// 这个版本主要修改:
// 1)适配了透明度
// 2)添加了callback回调函数
// 3)把回调函数内的this指向改成传进来的ele
// 4)添加自定义属性实现函数节流
// 5)模拟了函数的重载

/*
* ele 要运动的元素
* targetJson 目标位置的json
* time 运动的时间  单位是ms
* tweenstring 缓冲的名称 可以不传(默认Linear)
* callback 回掉函数 (也可以不传)
*/


function animate(ele,targetJson,time,tweenString,callback){

	if(arguments.length<3 || typeof arguments[0] != 'object' || typeof arguments[1] != 'object' || typeof arguments[2] != 'number'){
		throw new Error('参数类型不匹配!!!');
	}else if(arguments.length==3){
		tweenString = 'Linear';
		callback = null;
	}else if(arguments.length==4){
		switch(typeof arguments[3]){
			case 'string':
				tweenString = arguments[3];
				callback = null;
				break;

			case 'function':
				callback = arguments[3];
				tweenString = 'Linear';
				break;

			default:
				throw new Error('老哥,第四个参数要么是缓冲对应的字符串,要么是回调函数,你这个明显不是啊!!!');
				break;
		}		
	}

			// {
			// 	'top':'500px',
			// 	'left':'600px'
			// }
			/*
			 时间间隔我们可以假定 50ms , 总的步数就有了 time/50,
			 有了目标json 我们还需要最初的json 有了这两个json就可以计算出步长json
			*/

			// 绑定自定义属性
			ele.isanimated = true;

			// 假定时间间隔为50ms
			var interval = 50;

			// 计算总步数
			var maxCount = time/interval;

			// 声明一个json记录最初的状态
			var semaphoreJson = {};

			// 声明一个json记录变化量
			var deltaJson = {};

			// 遍历targetJson
			for(var k in targetJson){
				// 根据targetJson中的k取到最初的状态
				semaphoreJson[k] = parseFloat(fetchComputedStyle(ele,k));
				// 把targetJson中的px干掉
				targetJson[k] = parseFloat(targetJson[k]);

				deltaJson[k] = targetJson[k] - semaphoreJson[k];
			}

			// 到此为止三个json全部搞定,动起来
			var count = 0;
			var timer = setInterval(function(){
				count++;

				// 核心代码
				for(var k in targetJson){
					// 通过缓冲公式算出每一帧的位置
					var n = Tween[tweenString](count,semaphoreJson[k],deltaJson[k],maxCount);
					// 动起来
					if(k != 'opacity'){
						ele.style[k] = n + 'px';
					}else{
						ele.style[k] = n;
						ele.style.filter = 'alpha(opacity=' + n*100 + ')';
					}
					
				}

				// console.log(semaphoreJson);

				if(count==maxCount){
					// 次数够了 抖个小机灵 拉终停表
					for(var k in targetJson){
						if(k != 'opacity'){
							ele.style[k] = targetJson[k] + 'px';
						}else{
							ele.style[k] = targetJson[k];
							ele.style.filter = 'alpha(opacity=' + targetJson[k]*100 + ')';
						}
					}
					clearInterval(timer);

					// 清除定时器 说明运动结束
					ele.isanimated = false;
					// 回调函数 同时把this指向传进来的ele
					// 利用逻辑与运算的短路语法 
					// 如果callback为null 那么后面的.call不会执行 
					// 如果callback不为空 就执行后面的.call语句
					callback && callback.call(ele);
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


		// Tween类
		var Tween = { 
			Linear: function(t, b, c, d) {
		        return c * t / d + b;
		    },
		    //二次的
		    QuadEaseIn: function(t, b, c, d) {
		        return c * (t /= d) * t + b;
		    },
		    QuadEaseOut: function(t, b, c, d) {
		        return -c * (t /= d) * (t - 2) + b;
		    },
		    QuadEaseInOut: function(t, b, c, d) {
		        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
		        return -c / 2 * ((--t) * (t - 2) - 1) + b;
		    },
		    //三次的
		    CubicEaseIn: function(t, b, c, d) {
		        return c * (t /= d) * t * t + b;
		    },
		    CubicEaseOut: function(t, b, c, d) {
		        return c * ((t = t / d - 1) * t * t + 1) + b;
		    },
		    CubicEaseInOut: function(t, b, c, d) {
		        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
		        return c / 2 * ((t -= 2) * t * t + 2) + b;
		    },
		    //四次的
		    QuartEaseIn: function(t, b, c, d) {
		        return c * (t /= d) * t * t * t + b;
		    },
		    QuartEaseOut: function(t, b, c, d) {
		        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
		    },
		    QuartEaseInOut: function(t, b, c, d) {
		        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
		        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
		    },
		    QuartEaseIn: function(t, b, c, d) {
		        return c * (t /= d) * t * t * t * t + b;
		    },
		    QuartEaseOut: function(t, b, c, d) {
		        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
		    },
		    QuartEaseInOut: function(t, b, c, d) {
		        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
		        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
		    },
		    //正弦的
		    SineEaseIn: function(t, b, c, d) {
		        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
		    },
		    SineEaseOut: function(t, b, c, d) {
		        return c * Math.sin(t / d * (Math.PI / 2)) + b;
		    },
		    SineEaseInOut: function(t, b, c, d) {
		        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
		    },
		    ExpoEaseIn: function(t, b, c, d) {
		        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
		    },
		    ExpoEaseOut: function(t, b, c, d) {
		        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
		    },
		    ExpoEaseInOut: function(t, b, c, d) {
		        if (t == 0) return b;
		        if (t == d) return b + c;
		        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
		        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
		    },
		    CircEaseIn: function(t, b, c, d) {
		        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
		    },
		    CircEaseOut: function(t, b, c, d) {
		        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
		    },
		    CircEaseInOut: function(t, b, c, d) {
		        if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
		        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
		    },
		    ElasticEaseIn: function(t, b, c, d, a, p) {
		        if (t == 0) return b;
		        if ((t /= d) == 1) return b + c;
		        if (!p) p = d * .3;
		        if (!a || a < Math.abs(c)) {
		            a = c;
		            var s = p / 4;
		        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
		        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
		    },
		    ElasticEaseOut: function(t, b, c, d, a, p) {
		        if (t == 0) return b;
		        if ((t /= d) == 1) return b + c;
		        if (!p) p = d * .3;
		        if (!a || a < Math.abs(c)) {
		            a = c;
		            var s = p / 4;
		        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
		        return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b);
		    },
		    ElasticEaseInOut: function(t, b, c, d, a, p) {
		        if (t == 0) return b;
		        if ((t /= d / 2) == 2) return b + c;
		        if (!p) p = d * (.3 * 1.5);
		        if (!a || a < Math.abs(c)) {
		            a = c;
		            var s = p / 4;
		        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
		        if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
		        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
		    },
		    //冲过头系列
		    BackEaseIn: function(t, b, c, d, s) {
		        if (s == undefined) s = 1.70158;
		        return c * (t /= d) * t * ((s + 1) * t - s) + b;
		    },
		    BackEaseOut: function(t, b, c, d, s ) {
		        if (s == undefined) s = 1.70158;
		        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
		    },
		    BackEaseInOut: function(t, b, c, d, s) {
		        if (s == undefined) s = 1.70158;
		        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
		        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
		    },
		    //弹跳系列
		    BounceEaseIn: function(t, b, c, d) {
		        return c - Tween.BounceEaseOut(d - t, 0, c, d) + b;
		    },
		    BounceEaseOut: function(t, b, c, d) {
		        if ((t /= d) < (1 / 2.75)) {
		            return c * (7.5625 * t * t) + b;
		        } else if (t < (2 / 2.75)) {
		            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
		        } else if (t < (2.5 / 2.75)) {
		            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
		        } else {
		            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
		        }
		    },
		    BounceEaseInOut: function(t, b, c, d) {
		        if (t < d / 2) return Tween.BounceEaseIn(t * 2, 0, c, d) * .5 + b;
		        else return Tween.BounceEaseOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
		    }
		}
