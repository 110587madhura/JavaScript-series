// function createHelloWorld() {
//     return function(...args) {
//         return "Hello World";
//     };
// }
// const foo = createHelloWorld()
// console.log(foo(1,2,3))

function createCounter(n) {
    let count = n;
    return function() {
        return count++;
    };
}
const n = -2;
const counter = createCounter(n);
const calls = ["call", "call", "call"];
const output = calls.map(() => counter());  // Output: [10, 11, 12]
console.log(output)
