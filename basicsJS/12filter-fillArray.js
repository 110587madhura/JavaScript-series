// using fill() method :
var testArray = [2,4,6,3,1,5,9,8]
// console.log(testArray.fill("m", 2, 5)) // [ 2, 4,'m','m','m', 5, 9,8 ]

// using filter() method : 
const myNumber = [23, 24,25, 55, 66, 77, 87, 98]
const result = myNumber.filter( (num) => num < 55 )
console.log(result)  // [ 23, 24, 25 ]