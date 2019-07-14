## 慕课网 typescript 入门笔记  
[课程链接](https://www.imooc.com/video/13515)

* typescript 是微软开发的一门编程语言，是Javascript的一个超集，遵循最新的ES6脚本语言规范，扩展了JavaScript语法。angular2框架本身就是由typescript语言编写的。

* ES是客户端脚本语言的规范，有ES5、ES6两个版本，javascript实现了ES5，typescript实现了ES6.

* 三大优势  
1，遵循es6规范，未来的主流  
2，强大的ide支持，包括类型检查，代码提示，重构  
3，angular2.0

* 为什么需要compiler  
  因为大部分浏览器还没有完成支持TypeScript(也就是不完全支持ES6)，所以需要编译器将TypeScript的代码转为JavaScript  
  [在线编译typescript代码](http://www.typescriptlang.org/play/index.html)
  
* mac下 sudo npm install -g typescript  
  npm install -g yarn  
  windows下 npm install -g typescript  
  -g 的意思是全局安装，这样它的命令行工具在任何目录下都可以调用到



## 菜鸟教程typescript

https://www.runoob.com/typescript/ts-tutorial.html

安装完成后我们可以使用 **tsc** 命令来执行 TypeScript 的相关代码，以下是查看版本号：

```
$ tsc -v
Version 3.2.2
```

然后我们新建一个 test.ts 的文件，代码如下：

var message:string = "Hello World"  console.log(message)

通常我们使用 **.ts** 作为 TypeScript 代码文件的扩展名。

然后执行以下命令将 TypeScript 转换为 JavaScript 代码：

```
tsc test.ts
```

这时候再当前目录下（与 test.ts 同一目录）就会生成一个 test.js 文件，代码如下：

var message = "Hello World"; console.log(message);

使用 node 命令来执行 test.js 文件：

```
$ node test.js 
Hello World
```

#### 变量作用域

变量作用域指定了变量定义的位置。

程序中变量的可用性由变量作用域决定。

TypeScript 有以下几种作用域：

- **全局作用域** − 全局变量定义在程序结构的外部，它可以在你代码的任何位置使用。
- **类作用域** − 这个变量也可以称为 **字段**。类变量声明在一个类里头，但在类的方法外面。 该变量可以通过类的对象来访问。类变量也可以是静态的，静态的变量可以通过类名直接访问。
- **局部作用域** − 局部变量，局部变量只能在声明它的一个代码块（如：方法）中使用。

以下实例说明了三种作用域的使用：

```
var global_num = 12          // 全局变量
class Numbers { 
   num_val = 13;             // 类变量
   static sval = 10;         // 静态变量
   
   storeNum():void { 
      var local_num = 14;    // 局部变量
   } 
} 
console.log("全局变量为: "+global_num)  
console.log(Numbers.sval)   // 静态变量
var obj = new Numbers(); 
console.log("类变量: "+obj.num_val)
```

以上代码使用 tsc 命令编译为 JavaScript 代码为：

```
var global_num = 12; // 全局变量
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13; // 类变量
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14; // 局部变量
    };
    Numbers.sval = 10; // 静态变量
    return Numbers;
}());
console.log("全局变量为: " + global_num);
console.log(Numbers.sval); // 静态变量
var obj = new Numbers();
console.log("类变量: " + obj.num_val);
```

执行以上 JavaScript 代码，输出结果为：

```
全局变量为: 12
10
类变量: 13
```

如果我们在方法外部调用局部变量 local_num，会报错：

```
error TS2322: Could not find symbol 'local_num'.
```

#### 剩余参数

有一种情况，我们不知道要向函数传入多少个参数，这时候我们就可以使用剩余参数来定义。

剩余参数语法允许我们将一个不确定数量的参数作为一个数组传入。



```
function buildName(firstName: string, ...restOfName: string[]) {
return firstName + " " + restOfName.join(" ");
}
let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
```

函数的最后一个命名参数 restOfName 以 ... 为前缀，它将成为一个由剩余参数组成的数组，索引值从0（包括）到 restOfName.length（不包括）。

```
function addNumbers(...nums:number[]) {  
var i;   
var sum:number = 0; 
for(i = 0;i<nums.length;i++) { 
sum = sum + nums[i]; 
} 
console.log("和为：",sum) 
} 
addNumbers(1,2,3) 
addNumbers(10,10,10,10,10)


```

编译以上代码，得到以下 JavaScript 代码：

```
function addNumbers() {
var nums = [];
for (var _i = 0; _i < arguments.length; _i++) {
nums[_i] = arguments[_i];
}
var i;
var sum = 0;
for (i = 0; i < nums.length; i++) {
sum = sum + nums[i];
}
console.log("和为：", sum);
}
addNumbers(1, 2, 3);
addNumbers(10, 10, 10, 10, 10);
```

输出结果为：

```
和为： 6
和为： 50
```





