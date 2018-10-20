// JavaScript Document
//对象冒充，是指将父类的属性和方法一起传给子类作为特权属性和特权方法  
function Person(name,age){  
    this.name = name;  
    this.age = age;  
    this.sayHi = function(){  
        alert('hi');  
    }  
}  
Person.prototype.walk = function(){ //此方法没有继承，调用报错 
    alert('walk.......');  
}  
function Student(name,age,grade){  
    //是指将父类的属性和方法一起传给子类作为特权属性和特权方法。  
    this.newMethod = Person;  
    this.newMethod(name,age);  
    delete this.newMethod;//如果不删除，newMethod还有Person的prototype方法walk  
    this.grade = grade;  
}  
var s1 = new Student('xiaoming',10,3);  
console.log(s1.walk());//s1作为Student的对象，拥有父类和子类的属性  
//Student { name="xiaoming", age=10, grade=3, sayHi=function() }  
//s1.walk();//报错 s1.walk is not a function  
//结论：Student类只继承了Person类的特权属性和方法，并没有继承Person类的共有属性和方法。 

