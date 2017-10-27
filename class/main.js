// ES5 类 创建一个类
/*function Plane(){
	this.wings = 2;
	this.speed = 100;
	this.altitude = 0;//海拔
}

const myPlane = new Plane();
// 用prototype.fly给plan这个类扩展方法
Plane.prototype.fly = function(){
	this.altitude = 3000;
}
myPlane.fly();


// 创建另一个类
function FighterPlane(){
	this.speed = 1000;
}
// 继承Plane对象
FighterPlane.prototype = new Plane();

var fighterPlane = new FighterPlane();
fighterPlane.fly();
console.log(fighterPlane.altitude);*/

// ES6
// 当你在React class中需要设置state的初始值或者绑定事件时需要加上constructor(){}
class Person{
	constructor(name,age,weight){
		this.name = name;
		this.age = age;
		this.weight = weight;
	}
    // 展示
	displayWeright(){
		console.log(this.weight);
	}
}


let person1 = new Person("ChaoMin",18,90);
// person1.displayWeright(); // 方法一般为功能函数需要调用方可执行
// console.log(person1.name);
//类里的继承
class Programmer extends Person{
       constructor(name,age,weight,language){
       	//super()是继承了整个类的一个引用
       	   super(name,age,weight);
       	   this.language = language;
       }
       displayWeright(){
       	   console.log(this.weight+"KG");
       }
}
let gaochao = new Programmer("Chao","18","70","go");
gaochao.displayWeright();
console.log(gaochao.language);




