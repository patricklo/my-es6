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

console.log(bar);// 报错  ReferenceError
let bar = 2;

var tmp = 123;
if (true){ //称为“暂时性死区”（temporal dead zone，简称 TDZ）。
    tmp = 'abc';  //ReferenceError
    let tmp;  //只要块级区域有let命令，此变量就不能提前使用
}



const PI=3.1415 // 只读常量，不能修改
console.log(PI)

//PI=4 // 报错
