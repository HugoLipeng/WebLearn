// JavaScript Document
//instanceof
//function test(){};
//var a=new test();
//alert(a instanceof test);
//delete
/*
function fun(){
	this.name = 'mm';
}
var obj = new fun();
console.log(obj.name);//mm
delete obj.name; //删除了属性
console.log(obj.name); //undefined
*/
var name = 'lily';
delete name; //删除不了普通变量
console.log(name); //lily