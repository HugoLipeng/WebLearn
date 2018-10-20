// JavaScript Document
// 一个对象，调用另一个对象
/*
function add(a,b)  {  
    alert(a+b);  
}  
function subs(a,b)  {  
    alert(a-b);  
}   
//add.call(subs,3,1); 
add.apply(subs,[3,1]);
*/
function Animal(){    
    this.name = "Animal";    
    this.showName = function(){    
        alert(this.name);    
    }    
}    
function Cat(){    
    this.name = "Cat";    
}    
var animal = new Animal();    
var cat = new Cat();    
    
//通过call或apply方法，将原本属于Animal对象的showName()方法交给对象cat来使用了。    
//输入结果为"Cat"    
//animal.showName.call(cat,",");    
animal.showName.apply(cat,[]);