// class syntax :
/* class User {
constructor
}
*/

class User {
    constructor(name, email) {
      this.name = name;   // this.name is a property of class User and name is coming from Constructor
      this.email = email;
    }
    #courseList = [];   // privite property of class User
      
    getInfo() {
        return { name: this.name, email: this.email };
    }
    enrollCourse(name) {    // its a setter code 
      this.#courseList.push(name);
    }
    getCourseList() {    // its a getter code
      return this.#courseList;
    }
  
    login() {  // static login() { => to make it strict-mode 
      return "You are logged in";
    }
  }
  
  class SubAdmin extends User { // to inherites some class we should use "extends" className
    constructor(name, email) {
      super(name, email);
    }
    getAdminInfo() {
      return "I am subadmin";
    }
    login() {
      return "login for admin only";
    }
  }
  
  module.exports = User;
  
  const rock = new User("rock", "rock@rock.com");
  //console.log(rock.getInfo());
  rock.enrollCourse("Angular Bootcamp");
  // console.log(rock.getCourseList());
  // console.log(rock.courseList);
  
  const tom = new SubAdmin("tom", "tom@jerry.com");
  console.log(tom.getAdminInfo());
  console.log(tom.login());
  
  console.log(tom.getInfo());
  