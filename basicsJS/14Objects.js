var user = {
    firstName : "Madhu",
    lastName : "Sunil",
    role : "Admin",
    loginCount : 32,
    facebookSignedIn : true 
}

console.log(user.firstName)
console.log(user.role)
console.log(user.loginCount)
console.log(user['lastName'])

user.loginCount = 44
console.log(user.loginCount)

// iphone Object :
var iphone = {
    model : "13Pro",
    operatingSystem : 12,
    price : 1200,
    cameras : 3
}

console.log(iphone.price)
console.log(iphone['model'])