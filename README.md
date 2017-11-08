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

Creating a new branch is quick aNd simple

