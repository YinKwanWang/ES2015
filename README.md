<<<<<<< HEAD
<<<<<<< .merge_file_Xms5yu
#  ES6 --ECMAScript 6  lesson-1

##  ES6 是JavaScript的一个标准，用于指定js语言规范

### 新变量类型 let / const / 箭头函数 / 扩展操作符

### let & var 的区别: let拥有域的概念
### 在js中，var的变量作用域仅限于函数 在外面是拿不到的
### let 的作用域仅限于自身的{}内 在外面是拿不到的

### const 定义的是常量在运行过程中是不可以被改变的量

### template模板语法 拼接 `我的全名是:${firstName +lastName}`;

### 将数组中的值进行翻倍 ES5map()方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

### map() 方法按照原始数组元素顺序依次处理元素。

### 在对象中用箭头函数是不行的 把: =>去了才可以也就是(){}

### 在箭头函数中 在对象里找不到该指向谁的时候 会指向最近的 this不是只想window的

### ES6中实现数组遍历

### 例子:let person = {
###      name:"Henry",
###      hobbies:["打篮球","写代码","王者荣耀"],
###      showHobbies(){
###  	 this.hobbies.forEach((hobby)=>{
###      console.log(this);
###      console.log(`${this.name}的爱好是${hobby}`);
###  	         });
###           }
###      }
###      person.showHobbies();

###  call / apply / bind
###  call 方法的作用 ： 1.为方法增加对象参数 2.改变函数内this的指向
###  apply 方法的作用： 1.第一个参数是对象  2.第二个参数必须是数组正常运行
###  bind  绑定的是一个对象 | let method = addToThis.bind(obj);调用这个方法后 传参才是a,b,c的值  | console.log(method(1,2,3));


###  学习分布操作符 解构 argument参数

###  arguments即使不用接收也能拿到值  拿到的是个数组对象
###  reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
###  ....这种语法叫做扩展运算符，可以插入到对应的位置里。

### let numbers = [4,6,3,8]; || let array = [1,2,...numbers,5,7];
=======
# ES6 --ECMAScript 6  lesson-2

## ES6 是JavaScript的一个标准，用于指定js语言规范

### 新变量类型 类 / 继承 

### 创建一个类  当你在React  class中需要设置state的初始值或者绑定事件时需要加上constructor(){}
### class Person{
###	constructor(name,age,weight){
###		this.name = name;
###		this.age = age;
###		this.weight = weight;
###	}
###    // 展示
###	displayWeright(){
###		console.log(this.weight);
###	}
### }let person1 = new Person("ChaoMin",18,90);

### 类里的继承
### class Programmer extends Person{
###       constructor(name,age,weight,language){
###       	//super()是继承了整个类的一个引用
###       	   super(name,age,weight);
###       	   this.language = language;
###       }
###       displayWeright(){
###       	   console.log(this.weight+"KG");
###       }
### }
### let gaochao = new Programmer("Chao","18","70","go");
### gaochao.displayWeright();
### console.log(gaochao.language);

### 框架中常会用到的Promise 介绍
### then(): 第一个回调函数，在成功时触发，第二个回调函数在失败时触发；
### catch(): 主要负责捕获异常信息；

### 严格模式下操作 "use strict"; 函数中的this指向 undefined

### 实例化promise对象  应用最多的地方一般会应用到请求里面

### let myPromise = new Promise((resolve,reject)=>{
      
###        setTimeout(()=>{
###                resolve("成功的时候，会显示这句话！");
###        },1000);
###    });

### resolve 成功返回什么  reject失败返回什么 只会执行其中一个

### let myPromise2 = new Promise((resolve,reject)=>{
###         setTimeout(() => {
###                resolve("队列中的第二个成功时调用的数据！");
###        },1500);
###  });

### Promise.all([myPromise,myPromise2])
###       .then((data) => {
###       	    console.log(data);
###       })
###       .catch((err) => {
###       	    console.log(err);
###       });all()接受数组作为参数

###  一个趋势 代替Ajax请求
###    fetch("http://localhost:3000/users")
###     .then((res) => {
###     	ES6中.json()解析字符串方法.then解析后执行什么回调函数
###     	res.json().then((data) => {
###     		console.log(data);
###     	})	
###     })
###     .catch((err) => {
###     	console.log("error: 请求失败！");
###     })

>>>>>>> .merge_file_J0NGN4


=======
# ES2015
## ECMAScript 和 JavaScript 的关系是，前者是后者的规格，后者是前者的一种实现（另外的 ECMAScript 方言还有 Jscript 和 ActionScript）。日常场合，这两个词是可以互换的。

## ES6 是JavaScript的一个标准，用于指定js语言规范

### 新变量类型 let / const / 箭头函数 / 扩展操作符 / 类 / 继承 

### Promise实例化对象 fetch(url) 代替ajax请求..
>>>>>>> f0db4e884003cd73de40d28330321f7d5c76b71e

