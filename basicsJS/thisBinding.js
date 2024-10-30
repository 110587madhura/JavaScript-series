const person = {
    firstName : 'sunil',
    lastName : 'gowda',
    role : 'admin',
    courseCount : 3,
    getInfo : function() {
        console.log(` First name is ${this.firstName}
            Last name is ${this.lastName}
            His role is ${this.role}
            and he is studying ${this.courseCount} courses `)
    }
}
person.getInfo()

const dj = {
    firstName : 'Rock',
    lastName : 'DJ',
    role : 'sub-admin',
    courseCount : 4
}
// bind gives us reference so we need to run that refference back :
// person.getInfo.bind(dj)() 
var djInfo = person.getInfo.bind(dj)
djInfo()