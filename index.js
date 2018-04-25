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

// var arr = [ 1, 2, 3 ];
var arr = [ 1, '2', ['a', 'b', 'c'] ];
console.log("arr:", arr);

for (var j = 0; j < arr.length; j++) {
  console.log("  arr[" + j + "]:", arr[j]);
}

arr.forEach(function (elem) {
  console.log("elem:", elem);
});

var splitString = "1,2,3,4".split(",");
console.log("splitString:", splitString);

var joinedArray = splitString.join(",");
console.log("joinedArray:", joinedArray);

var emptyArray = [];
emptyArray.push(1);
console.log("emptyArray:", emptyArray);
emptyArray.push(2);
console.log("emptyArray:", emptyArray);
emptyArray.push(3);
console.log("emptyArray:", emptyArray);
var popped = emptyArray.pop();
console.log("emptyArray:", emptyArray);
console.log("popped:", popped);
emptyArray.pop();
console.log("emptyArray:", emptyArray);
emptyArray.pop();
console.log("emptyArray:", emptyArray);


console.log("\n=======================");
console.log("==== Functions");
console.log("=======================");

function foo(a, b, c) {
  // console.log("== in foo() value of a:", a);
  // console.log("== in foo() value of b:", b);
  // console.log("== in foo() value of c:", c);
  for (var j = 0; j < arguments.length; j++) {
    console.log("  -- arguments[" + j + "]:", arguments[j]);
  }
  return a + b + c;
}

console.log("foo(1, 2, 3):", foo(1, 2, 3));
console.log("foo('a', 'b', 'c'):", foo('a', 'b', 'c'));

console.log("foo(1):", foo(1));

console.log("foo(1, 2, 3, 4, 5):", foo(1, 2, 3, 4, 5));

function sum() {
  var s = 0;
  for (var j = 0; j < arguments.length; j++) {
    s += arguments[j];
  }
  return s;
}

console.log("sum(1, 2, 3, 4, 5):", sum(1, 2, 3, 4, 5));
console.log("sum(1):", sum(1));

var x = 10;
function bar(fn) {
  x = -10;
  return x + fn(1, 2, 3);
}

console.log("bar(sum):", bar(sum));
console.log("x:", x);

function makeCounter() {
  var counter = 0;
  return function () {
    return counter++;
  }
}

var counter1 = makeCounter();
console.log("counter1:", counter1());
console.log("counter1:", counter1());
console.log("counter1:", counter1());
console.log("counter1:", counter1());
console.log("counter1:", counter1());
console.log("counter1:", counter1());

var counter2 = makeCounter();
console.log("counter2:", counter2());
console.log("counter2:", counter2());
console.log("counter2:", counter2());
console.log("counter2:", counter2());
console.log("counter2:", counter2());


console.log("\n=======================");
console.log("==== Objects");
console.log("=======================");

var obj = {};
obj["cat"] = "cool";
obj["dog"] = "sweet";
obj.bunny = "excellent";

console.log("obj['cat']:", obj["cat"]);
console.log("obj.cat:", obj.cat);
console.log("obj['dog']:", obj["dog"]);
console.log("obj.dog:", obj.dog);
console.log("obj['fish']:", obj["fish"]);
console.log("obj['bunny']:", obj["bunny"]);

// var person = {
//   "firstName": "Luke",
//   "lastName": "Skywalker"
// };

var person = {
  firstName: "Luke",
  lastName: "Skywalker",
  gpa: 4.0,
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
  // fullName: this.firstName + " " + this.lastName
};

console.log("person.firstName", person.firstName);
console.log("person.lastName", person.lastName);
console.log("person.gpa", person.gpa);
console.log("person.getFullName()", person.getFullName());
// console.log("person.fullName", person.fullName);

console.log("\n=======================");
console.log("==== Classes");
console.log("=======================");

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

var p = new Person("Luke", "Skywalker");

console.log("p:", p);
console.log("p.firstName:", p.firstName);
console.log("p.lastName:", p.lastName);
console.log("p.getFullName():", p.getFullName());

var p2 = new Person("Leia", "Organa");

console.log("p2:", p2);
console.log("p2.firstName:", p2.firstName);
console.log("p2.lastName:", p2.lastName);
console.log("p2.getFullName():", p2.getFullName());


/*
 * The below is bad practice, but still possible.
 */
// Array.prototype.foo = function () {
//   console.log("Foo!");
// }
//
// emptyArray.foo();
