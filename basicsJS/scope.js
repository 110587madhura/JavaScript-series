console.log(name)  // undefined
var name = 'sunil'
console.log(name)  // sunil

if(true) {
    var lastName = 'gowda'
}
console.log(lastName)    // gowda 
//------------------------------------------------------
console.log(name)  // "ReferenceError: Cannot access 'name' before initialization"
let name = 'sunil'
console.log(name)  // sunil


if(true) {
    let lastName = 'gowda'
}
console.log(lastName) // "ReferenceError: lastName is not defined"