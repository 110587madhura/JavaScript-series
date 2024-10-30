// Conditional operators excercise :
// Allow user to access course if he is :
// logged in from email
// logged in from google
// logged in from facebook 

var email = true
var facebook = false
var google = false

if(email || facebook || google) {
    console.log("Allow user to access the course")
    }

// if(email) {
// console.log("Allow user to access the course")
// }  if(facebook) {
//     console.log("Allow user to access the course") 
// } else if(google) {
//     console.log("Allow user to access the course")
// }
