// JavaScript Document
//字面量定义对象
/*
var person = {
	 name:"张三", 
	 age: 26, 
	 gender: "男", 
	 eat: function(stuff ) { 
	 alert( "我在吃" + stuff ); 
	 } 
};
*/ 
//person.height = 176; 
//person.eat("土豆");
//alert(person instanceof Object);//true
//使用object创建对象
/*
var box = new Object();                  
box.name = 'Lee';                          
box.age = 100;                           
box.run = function (str){                                         
     return this.name + this.age + str;  
};
 
//alert(box.run("1111"));
alert(box.age);
*/ 
//构造方式定义对象
/*
function CPerson(name,sex,age) {//注意这里 构造函数首字母大写
 this.name = name;
 this.sex = sex;
 this.age = age;
 this.show = function () {
 console.log(this.name, this.age, this.sex);
 }
}
var p1 = new CPerson('zhangsan','男','100');
 p1.show();
var p2 = new CPerson('lisi','女','14');
 p2.show();
*/
//工厂方式：
/*
   function createObject(name, age)   
    {    //集中实例化的函数   
        var obj = new Object();   
        obj.name = name;  
         obj.age = age;   
        obj.run = function ()  
         {  
             return this.name + this.age + '运行中...';  
        };  
         return obj;  
    }  
    var box1 = createObject('Lee', 100);    //第一个实例  
    var box2 = createObject('Jack', 200);   //第二个实例  
     alert(box1.run());  
    alert(box2.run());  //保持独立 
*/
//原型模式
/*
function Car(){
}
Car.prototype.color = "red";
Car.prototype.doors = 4;
Car.prototype.showColor = function(){
alert(this.color);
}
var car1 = new Car();
alert(car1.doors)
var car2 = new Car();
car1.showColor();
*/
//混合模式：
/*
 function Blog(name, url, friend ) {
      this.name = name;
      this.url = url;
      this.friend = friend;
  }
  
 Blog.prototype.alertInfo = function () {
     console.log('名字:'+this.name + ' 空间:' + this.url + '好友:' +  this.friend);
 }
 
 var blog = new Blog("zhangsan","http://www.baidu.com/",["aaa", "bbb","ccc", "ddd"]);
 var blog2 = new Blog("lisi","http://www.sina.com/",["aaa", "bbb","ccc", "ddd"]);
 	 blog.alertInfo();
 	 blog2.alertInfo();
	 */