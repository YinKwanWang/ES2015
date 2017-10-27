"use strict"; //严格模式 函数中的this指向 undefined

// function worthless(){
// 	console.log(this);
// }
// worthless();

// 实例化promise对象  应用最多的地方一般会应用到请求里面
// resolve 成功返回什么  reject失败返回什么 只会执行其中一个
//__proto__
let myPromise = new Promise((resolve,reject)=>{
      
        setTimeout(()=>{
                resolve("成功的时候，会显示这句话！");
        },1000);

        // setTimeout(()=>{
        //         reject("error: 网络连接失败！");
        // },500);
});

/*myPromise.then((data)=>{
	console.log(data);
},(err)=>{
	console.log(err);
});*/

/*myPromise.then((data)=>{
	console.log(data);
}).catch((err)=>{
     console.log(err);
});*/

let myPromise2 = new Promise((resolve,reject)=>{
         setTimeout(() => {
                resolve("队列中的第二个成功时调用的数据！");
        },1500);
});
// all()接受数组作为参数。p1,p2,p3都是Promise的实例对象，
// p要变成Resolved状态需要p1，p2，p3状态都是Resolved，
// p的状态就变成Rejected（个人感觉很想&&符号链接）
Promise.all([myPromise,myPromise2])
       .then((data) => {
       	    console.log(data);
       })
       .catch((err) => {
       	    console.log(err);
       });
  // 一个趋势
fetch("http://localhost:3000/users")
     .then((res) => {
     	//ES6中.json()解析字符串方法.then解析后执行什么回调函数
     	res.json().then((data) => {
     		console.log(data);
     	})	
     })
     .catch((err) => {
     	console.log("error: 请求失败！");
     })

/*
*Promise
* then(): 第一个回调函数，在成功时触发，第二个回调函数在失败时触发；
* catch(): 主要负责捕获异常信息；
*/