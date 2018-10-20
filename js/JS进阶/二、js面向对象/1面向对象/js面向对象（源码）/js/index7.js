// JavaScript Document
//原型继承
/* 
	function Person(name,age){  
        this.name=name;  
        this.age=age;  
    }  
    Person.prototype.sayHello=function(){  
        alert("使用原型得到Name："+this.name);  
    }  
    var per=new Person("张三",21);  
    per.sayHello(); //输出：使用原型得到Name:马小倩  
	
	function Student(){}  
    Student.prototype=new Person("李四",21); //原型继承
    var stu=new Student();  
    Student.prototype.grade=5;  
    Student.prototype.intr=function(){  
        alert(this.grade);  
    }  
    stu.sayHello();//输出：使用原型得到Name:洪如彤  
    stu.intr();//输出：5  
*/
//构造方法继承
/*
	function  Parent(name){  
        this.name=name;  
        this.sayParent=function(){  
            alert("Parent:"+this.name);  
        }  
    } 
	function  Child(name,age){  
        this.tempMethod=Parent;//构造继承  
        this.tempMethod(name);  
        this.age=age;  
        this.sayChild=function(){  
            alert("Child:"+this.name+"age:"+this.age);  
        }  
    }
	var parent=new Parent("张三");  
    parent.sayParent();  
    var child=new Child("李四",24);   
    child.sayChild(); 
*/
// call aplay继承
	function  Person(name,age,love){  
        this.name=name;  
        this.age=age;  
        this.love=love;  
        this.say=function say(){  
            alert("姓名："+name);  
        }  
    }
	//call方式  
    function student(name,age){  
        Person.call(this,name,age);  
    }  
    //apply方式  
    function teacher(name,love){  
        Person.apply(this,[name,love]);  
        //Person.apply(this,arguments); //跟上句一样的效果，arguments  
    }  
	var per=new Person("张三",25,"李四"); //输出：“武凤楼”  
    per.say();  
    var stu=new student("王武",18);//输出：“曹玉”  
    stu.say();  
    var tea=new teacher("赵六",16);//输出：“秦杰”  
    tea.say(); 


