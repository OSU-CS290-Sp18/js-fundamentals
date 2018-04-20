console.log("====== All About JS");

console.log("\n=======================");
console.log("==== Variables");
console.log("=======================");

var i = 2;
console.log("i:", i);

var f = 3.1415;
var str = "";

const c = 16;
let v = 3;

console.log("\n=======================");
console.log("==== Numbers");
console.log("=======================");

console.log("9 / 5 = ", 9 / 5);


console.log("\n=======================");
console.log("==== Comparisons");
console.log("=======================");

console.log("2 == '2' = ", 2 == '2');
console.log("2 == '3' = ", 2 == '3');
console.log("2 != '3' = ", 2 != '3');

console.log("2 === '2' = ", 2 === '2');
console.log("2 !== '3' = ", 2 !== '3');

if (str) {
  console.log("str is truthy");
} else {
  console.log("str is falsy");
}


console.log("\n=======================");
console.log("==== Strings");
console.log("=======================");

var greeting = "hello my name is " + "Rob";
console.log("greeting:", greeting);

var newGreeting = "hello my name is: " + 8;
console.log("newGreeting:", newGreeting);
console.log("newGreeting.length:", newGreeting.length);

console.log("newGreeting.slice(0, 10):", newGreeting.slice(0, 10));

console.log("'team'.indexOf('i'):", 'team'.indexOf('i'));
console.log("'decathlon'.indexOf('cat'):", 'decathlon'.indexOf('cat'));

console.log("\n=======================");
console.log("==== Arrays");
console.log("=======================");

var arr = [ 1, 2, 3 ];
var arr = [ 1, '2', ['a', 'b', 'c'] ];
console.log("arr:", arr);

for (var j = 0; j < arr.length; j++) {
  console.log("  arr[" + j + "]:", arr[j]);
}

arr.forEach(function (elem) {
  console.log("elem:", elem);
});
