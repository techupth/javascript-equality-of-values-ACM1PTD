// Exercise #1: Strict and Same
// Start commenting here
Object.is(10, 20); // false
console.log(Object.is(10, 20))
Object.is(0, -0); // false
console.log(Object.is(0, -0))
Object.is(NaN, 100); // false
console.log(Object.is(NaN, 100))
Object.is("one", "two"); // false
console.log(Object.is("one", "two"))
Object.is({ name: "John", age: 30 }, { name: "John", age: 30 }); // false
console.log(Object.is({ name: "John", age: 30 }, { name: "John", age: 30 }))
Object.is(null, undefined); // false
console.log(Object.is(null, undefined))

10 === 20; // false
console.log(10 === 20)
10 === "10" // false
console.log(10 === "10")
3.14 !== 3.14;  //false
console.log(3.14 !== 3.14)
"TechUp" !== "TechUp"; // false
console.log("TechUp" !== "TechUp")
NaN === NaN; // false
console.log(NaN === NaN)
0 !== -0; // false
console.log(0 !== -0)

let objectA = { course: "Web Developer", price: 300000 };
let objectB = { course: "Web Developer", price: 300000 };
objectA === objectB; // false
console.log(objectA === objectB)
