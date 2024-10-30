var fullName = 'Madhura DM' // var fullName = "Madhura DM"

// how to name variables:
// fullName - camel Case
// full_name - snake case
// full-name - kabab case 

// find discount price :

var sellingPrice = 199
var listedPrice = 799

var discountPercentage = ((listedPrice-sellingPrice)/listedPrice) * 100
console.log("Discount percentage is :",Math.round(discountPercentage) + ' % off')