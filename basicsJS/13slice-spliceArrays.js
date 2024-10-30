
var users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"]

// console.log(users.slice(1,2)) // [ 'Tim' ]

console.log(users.splice(1, 3, 'HI'))  // [ 'Tim', 'Ton', 'Sam' ]
console.log(users)  // [ 'Ted', 'HI', 'Sor', 'Sod' ] 