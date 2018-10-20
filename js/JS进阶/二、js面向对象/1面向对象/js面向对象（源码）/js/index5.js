//封装实现  采用闭包
/*
function haha() {  
  var n = 1;  
  function hehe() {  
    n++;  
  }  
  hehe();  
  return n;  
}  
console.log(haha()); // 2
*/
/*
function haha() {  
  var n = 1;  
  function hehe() {  
    return ++n;  
  }  
  return hehe;  
}  
console.log(haha()()); // 2 
*/
//封装
function A() {  
  // 私有方法 _xx  
  function _xx(){ alert(11) ;}  
  // 公有方法  
  this.xx = function() {  
    //alert(123);//弹出123
	return _xx;  //返回私有方法 
  }  
}  
A.prototype = {  
  other:function() {  
    console.log("普通方法");  
  }  
} 
var a = new A();
//alert(a.xx());//可以调用到
var b = a.xx();
//b(); //调用到xx
a.other();

