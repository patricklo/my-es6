async function basicAsyncDemo(){
    let result = await Math.random();
    console.log(result);
}

console.log(basicAsyncDemo());


async function demo01(){
    return 123;
}

demo01().then(val => {
    console.log(val);
})



function sleep(second){
    return new Promise(((resolve, reject) => {
        setTimeout(()=>{
            resolve('enough sleep~');
        },second);
    }))
}

function normalFunc() {
    console.log('normal function');
}

async  function awaitDemo(){
    await normalFunc();
    console.log('something!~~~');
    let result = await sleep(2000);
    console.log(result);//两秒后打印
}


awaitDemo();


function sleep2(second,param){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(param);
        },second);
    })
}

async function test(){
    let result1 = await sleep2(2000,'req01');
    let result2 = await sleep2(1000,'req02'+result1);
    let result3 = await sleep2(500,'req03'+result2);

    console.log(`${result3} ${result2} ${result1}`);
}

test();


function rejectsleep(second){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject('reject ~!!');
        }, second)
    })
}

async function errorDemo() {
    let result = await rejectsleep(4000);
    console.log(result);
}

errorDemo();


async function erroDemoSuper(){
    try{
        let result = await rejectsleep(1000);
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

erroDemoSuper();


function correctsleep(second) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('request done! ' + Math.random());
        }, second);
    })
}

async function bugDemo(){
    await correctsleep(1000);
    await correctsleep(1000);
    await correctsleep(1000);
    console.log('clear the loading~');
}

bugDemo();

//loading 确实是等待请求都结束完才清除的。但是你认真的观察下浏览器的 timeline 请求是一个结束后再发另一个的（若观察效果请发真实的 ajax 请求）
// 那么，正常的处理是怎样的呢？

async function correctDemo(){
    let p1 = sleep(1000);
    let p2 = sleep(1000);
    let p3 = sleep(1000);
    await Promise.all([p1,p2,p3]);
}

correctDemo();


async function forDemo() {
    let arr = [1,2,43,4,5];
    for (let i =0;i<arr.length;i++){
        await arr[i];
    }
}

forDemo();


