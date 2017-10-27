let name = "Henry";
console.log(name);

// let & var 的区别: let拥有域的概念
// 在js中，var的变量作用域仅限于函数 在外面是拿不到的

// let 的作用域仅限于自身的{}内 在外面是拿不到的

// var 函数
// function sayName(){
//   var name = "Henry";
// }
// sayName();
// console.log(name);//undefined



//  let 函数 if for
// function sayName(){
//   let name = "Henry";
// }
// sayName();
// console.log(name);//


// if(true){
//   var name = "Henry";
// }
// console.log(name);

// for(let i = 0; i < 10; i++){
//   console.log(i);
// }
// console.log("循环外",i);

// {
//   let name = "Henry";
// }
// console.log(name);


// const 定义的是常量在运行过程中是不可以被改变的量
// const API_KEY = "78fasdlkfdsja";
// API_KEY = "78fasdlkfdsjf";
// console.log(API_KEY);


// template模板语法 拼接 ``;
var firstName = "Henry";
var lastName = "Wu";
// console.log("我的全名是："+firstName +lastName);
// console.log(`我的全名是:${firstName +lastName}`);
console.log(`我的全名是:${firstName} ${lastName}`);