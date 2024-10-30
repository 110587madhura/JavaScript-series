// example for lexical scope :
function init() {
    var firstName = 'sunil'
    function sayFirstName() {
        console.log(firstName)
    }
    sayFirstName()
    
}
init()
// console.log(firstName)   // ERROR "not defined"