// example for closures :
function init() {
    var firstName = 'sunil'
    console.log('hello there')
    function sayFirstName() {
        console.log(firstName)
    }
   return sayFirstName
    
}
var value = init()
 value()

   //  console.log(firstName)     // ERROR "not defined"