const map = new Map();
map.set('first','hello');
map.set('sec','es6');

for (let [key, value] of map){
    console.log(key+":"+value);
}


console.log("\uD842\uDFB7");
console.log("\u{20BB7}");
console.log("\uD842\uDFB7" == "\u{20BB7}");


let s = "Hello world";
console.log(s.startsWith("Hello"));
console.log(s.endsWith("ld"));
console.log(s.includes("o",3));


console.log('x'.repeat(3));

//补全: 第一个参数是字符串补全生效的最大长度，第二个参数是用来补全的字符串。
console.log('na'.repeat(2.8));
console.log('x'.padStart(5,'ab'));
console.log('x'.padEnd(4,'ab'));

//模板字符串 template string ，用反引号表示 ` ,里面可以放${} 来引用值或其它javascript表达式
let name = 'my_name';

let greeting = `\`Yo\` ${name} World!`;
console.log(greeting);
