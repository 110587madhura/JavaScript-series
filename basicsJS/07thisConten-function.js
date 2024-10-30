// tipper('80') // 95
function tipper(a)  { 
    var bill = parseInt(a)
    console.log(bill + 15)
}
tipper('80')  // 95


// bigTipper("200")   // Error : Undefined / not a function
var bigTipper = function (a) {
    var bill = parseInt(a)
    console.log(bill + 15)
}
bigTipper("200")     // 215

//-------------------------------------------------------

console.log(name)   // undefined because name is a Variable
var name = "hitesh"

function sayName() {
    var name = "MR. H"
    console.log(name)  // MR. H
}
sayName()

console.log(name)    // hitesh