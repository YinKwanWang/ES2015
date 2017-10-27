// 箭头函数
let add = (a,b) => {
  return a + b;
}

console.log(add(2,3));

// let numbers = [2,3,4,5];
// let arr = [];
// //将数组中的值进行翻倍
// for (var i = 0; i < numbers.length; i++){
//   arr[i] = numbers[i]*2;
// }
// console.log(arr);

let numbers = [2,3,4,5];
// 将数组中的值进行翻倍 ES5map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
//  map() 方法按照原始数组元素顺序依次处理元素。
// let doubles = numbers.map(function(n){
//   return n*2;
// });

// console.log(doubles);


//将数组中的值进行翻倍 ES6
let doubles = numbers.map((n)=>{
  return n*2;
});

console.log(doubles);
// ES5中用法
// let person = {
//   name:"Henry",
//   sayName:function(){
//     console.log(`Hello ${this.name}`);
//   }
// }
// person.sayName();

// 在对象中用箭头函数是不行的 把: =>去了才可以
// let person = {
//   name:"Henry",
//   sayName(){
//     console.log(`Hello ${this.name}`);
//   }
// }
// person.sayName();

// 实现ES5(ES5)数组遍历
// let person = {
//   name:"Henry",
//   hobbies:["打篮球","写代码","王者荣耀"],
//   showHobbies:function(){
//   	let self = this;
//   	this.hobbies.forEach(function(hobby){
//   		 // console.log(this);
//          console.log(`${self.name}的爱好是${hobby}`);
//   	});
//   }
// }
// person.showHobbies();

// 实现ES6数组遍历
let person = {
  name:"Henry",
  hobbies:["打篮球","写代码","王者荣耀"],
  showHobbies(){
  	this.hobbies.forEach((hobby)=>{
  		 // 在箭头函数中 在对象里找不到该指向谁的时候 会指向最近的 this不是只想window的
  		 //console.log(this);
         console.log(`${this.name}的爱好是${hobby}`);
  	});
  }
}
person.showHobbies();


