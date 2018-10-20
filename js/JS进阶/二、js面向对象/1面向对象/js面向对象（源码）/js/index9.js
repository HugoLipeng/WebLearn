// JavaScript Document
//callee
/*
function calleeDemo() {
	alert(111);
	alert(arguments.callee);//打印函数内容
    //alert(arguments.callee());//调用函数,死循环
}
calleeDemo();
*/

var sum = function (n) {
    if (n <= 1)
        return 1;
    else
        return n + arguments.callee(n-1)//调用了函数本身
}
alert(sum(5));