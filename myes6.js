for (let i =0; i< 10; i++){
    console.log(i)
}


var a=[];
for(let i =0;i<10;i++){
    a[i] = function () {
        console.log(i);
    };
}

a[6]();


console.log(foo);  // 输出undefined
var foo=2;

//console.log(bar);// 报错  ReferenceError
let bar = 2;

var tmp = 123;
if (true){ //称为“暂时性死区”（temporal dead zone，简称 TDZ）。
    //tmp = 'abc';  //ReferenceError
    let tmp;  //只要块级区域有let命令，此变量就不能提前使用
}



const PI=3.1415 // 只读常量，不能修改
console.log(PI)

//PI=4 // 报错


let [x, y = 'b'] = ['a',undefined]

console.log(x,y)

let {foo1, bar1} ={foo1:"aaa",bar1:"bbb"};
console.log(foo1, bar1)


let { foo2: foo2, bar2: bar2 } = { foo2: "aaa", bar2: "bbb" };
//简写：let { foo2, bar2 } = { foo2: "aaa", bar2: "bbb" };  真正被赋值的是后面的foo2,bar2
//let { foo: baz } = { foo: "aaa", bar: "bbb" };  baz='aaa'  foo: error:foo is not defined


var mypromise = new Promise(function(resolve,reject){
    setTimeout(function () {
        resolve("success!!");
    },250)
});

mypromise.then(function (successMessage) {
    console.log("Yay!"+successMessage)

})


function ajax(URL){
    return new Promise(function (resolve,reject) {
        var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
        var req = new XMLHttpRequest();
        req.open('GET',URL,true);
        req.onload=function(){
        if(req.status==200){
            resolve(req.responseText);
        }else{
            //reject(req.statusText);
            reject("request status error:"+req.statusText);
        }
        };
        req.onerror = function () {
            //reject(new Error(req.statusText));
            reject("request error:"+req.statusText);
        };
        req.send();
    });
}

var URL = "http://localhost:8088/api/refs/getFundBookInfo";
// ajax(URL).then(function (value) {
//     console.log('connent:'+value);
// }).catch(function (error) {console.log('error:'+error)});


var promises = ["getFundBookInfo","getFundBookInfo2","getFundBookInfo3"].map(function (funcName) {
    return ajax("http://localhost:8088/api/refs/"+funcName);
})

Promise.race(promises).then(function (response) {
    console.log(response);
}).catch(function (error) {
    console.log(error);
});

