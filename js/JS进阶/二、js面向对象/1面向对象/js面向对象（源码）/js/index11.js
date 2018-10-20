// JavaScript Document
//this全局变量
/*
function test() { 
	this.x = 1; 
	alert(x); 
} 
test();
*/
//其实这里的this就是全局变量。看下面的例子就能很好的
//理解其实this就是全局对象Global
/*
var x = 1; 
function test() { 
	this.x = 0; 
} 
test(); 
alert(x);//0 
*/
//作为方法调用
function test() { 
	alert(this.x);//this代表对象o 
} 
var o = {}; 
o.x = 2; 
o.m = test; 
o.m(); //1 