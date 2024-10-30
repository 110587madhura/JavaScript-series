var user = {
    firstName : "Madhuara",
    lastName : "Sunil",
    role : "Admin",
    loginCount : 32,
    facebookSignedIn : true,
    courseList : [],
    buyCourse : function (courseName) {
        this.courseList.push(courseName)
    },
    getCourseCount : function() {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`
    },
    useInfo : function() {
return `${this.firstName} - ${this.lastName} `
    }
}

var courseList = true 
console.log(user.firstName)
console.log(user.getCourseCount())
user.buyCourse('React JS course')
user.buyCourse('Angular JS course')
console.log(user.getCourseCount())
console.log(user.useInfo())