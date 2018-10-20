// JavaScript Document
//测试__proto__
/*
var Person = function () { };
var p = new Person();
alert(p.__proto__ === Person.prototype);
*/
/*
	var Person = function () { };
		Person.prototype.Say = function () {
		alert("Person say");
	}
	var p = new Person();
	p.Say();
*/
//原型连完整案例
/*
	var Person = function () { };
		Person.prototype.Say = function () {
		alert("Person say");
	}
	Person.prototype.Salary = 50000;
	var Programmer = function () { };
	Programmer.prototype = new Person();
	Programmer.prototype.WriteCode = function () {
		alert("programmer writes code");
	};
	Programmer.prototype.Salary = 500;
	var p = new Programmer();
	p.Say();
	p.WriteCode();
	alert(p.Salary);
*/