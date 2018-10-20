// JavaScript Document
//函数内部可以读取全局变量：
	/*
	var n=999;
　　function f1(){
　　　　alert(n);
　　}
　　f1(); // 999
	*/
//外部无法读取函数内声明的变量
	/*
	function f1(){
　　　　var n=999;
　　}
　　alert(n); 
	*/
//函数内部在定义函数
/*
function a(){ 
 var i = 0; 
	 function b(){ 
		alert(++i);//++i返回的则是自增后的值
	 } 
 return b;
}
var c = a();
c();
*/
//变量内存始终保存在内存中 
    function f1(){
　　　　var n=999;
　　　　nAdd=function(){n+=1}
　　　　function f2(){
　　　　　　alert(n);
　　　　}
　　　　return f2;
　　}
　　var result=f1();
　　result(); // 999
　　nAdd();
　　result(); // 1000
