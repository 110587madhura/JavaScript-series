// Using regular function declaration :
// function isEven(element) {
//     if(element%2 ===0){
//         return true
//     } else {
//         return false
//     }
// }
// console.log(isEven(5))

// using function expression with variables :
// var isEven = function (ele) {
// return ele%2 ===0
// }
// console.log(isEven(2))

// using Arrow functions and callback function :
var result = [2,4,6,8].every((e) => {
    return e%2 === 0
} )
console.log(result) 


var result1 = [2,4,6,8].every((e) => ( e%2 === 0 ))
console.log(result1) 