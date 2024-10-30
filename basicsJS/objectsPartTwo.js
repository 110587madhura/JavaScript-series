var User = {
    name : "",
    getUserName: function() {
        console.log(`User name: ${this.name}`)
    }
}

var sunny = Object.create(User)
console.log(sunny)
sunny.name = "madhuraSunil"
sunny.getUserName()