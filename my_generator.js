function* myGenerator(){
    yield 'hello';
    yield 'es6';
    return 'generation';
}

var hw = myGenerator();

console.log(hw.next());
console.log(hw.next());
console.log(hw.next());


function* calc(){
    yield 123 + 456;
}

var calc_gen = calc();
console.log(calc_gen.next());



var arr = [1, [[2, 3], 4], [5, 6]];

var wrong_flat = function* (a) {
    a.forEach(function (item) {
        if(typeof item !== 'number'){
            //yield* flat(item);   // 错误，yield关键字不能用在普通函数中,只能用在generator 函数
        }
    })
}


var correct_flat = function* (a) {
    var length = a.length;
    for(var i=0;i<length;i++){
        var item = a[i];
        if (typeof item !== 'number'){
            yield* correct_flat(item);  //在generator中调用generator 使用yield*
        }else{
            yield item;
        }
    }
}


for (var f of correct_flat(arr)){
    console.log(f);
}


