// 学习分布操作符 解构 argument参数
// arguments即使不用接收也能拿到值  拿到的是个数组对象
// let sum = function(){
//      console.log(arguments);
// }

// call / apply / bind
// call 方法的作用 ： 1.为方法增加对象参数 2.改变函数内this的指向
// apply 方法的作用： 1.第一个参数是对象  2.第二个参数必须是数组正常运行
// bind  绑定的是一个对象
// var obj = {num : 2};

// var addToThis = function(a){
//       return this.num + a;
// }
// console.log(addToThis.call(obj,3));

// var obj = {num : 2};

// var addToThis = function(a,b,c){
// 	  // console.log(this);
//       return this.num + a + b + c;
// }
// var arr = [1,2,3];
// console.log(addToThis.apply(obj,arr));

// bind方法
/*var obj = {num:2};
var addToThis = function(a,b,c){
	return this.num + a + b + c;
}
let method = addToThis.bind(obj);
// 调用这个方法后 传参才是a,b,c的值
console.log(method(1,2,3));*/

// ES5
/*let sum = function(){
	// 借助call把拿到的对象原型 传过去
	return Array.prototype.reduce.call(arguments,function(prev,curr){
         return prev + curr;
         console.log(curr);
	});
}
console.log(sum(2,3,4,5));*/

// ES6
/*let sum = function(...args){
	console.log(args);
}*/
// reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
// ....这种语法叫做扩展运算符，可以插入到对应的位置里。
let sum = function(...args){
	return args.reduce((prev,curr)=>{
         return prev + curr;
	});
}
console.log(sum(2,3,4,5));

// let numbers = [4,6,3,8];
// let array = [1,2,...numbers,5,7];
// console.log(array);

// ES5
// 求最大值
// let max = Math.max(4,2,6,8);
// console.log(max);
// ES5
// 求最大值 传数组
// let numbers = [4,3,7,9];
// let max = Math.max.apply(null,numbers);
// console.log(max);

// ES6
let numbers = [1,5,9,3];
let max = Math.max(...numbers);
console.log(max);