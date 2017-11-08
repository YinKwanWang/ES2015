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



Creating a new branch is quick AND simple