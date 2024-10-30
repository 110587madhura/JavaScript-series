/* 
Define a function that can answer the role of a user.
A user can be on following roles:
admin - with all access
subadmin - with access to create/delete courses
testprep - with access to create/ delete tests
user - consume all content
other - trial user.

Input : getuserRole(name, role)
*/

function getUserRole(name, role) {

switch (role) {
    case 'admin':
        return `${name} is admin with all access.`
        //break;
        case 'subadmin':
             return `${name} is sub-admin with all access to create and delete courses.`
            //break;
            case 'testprep':
        return `${name} is test-prep with all access to create and delete test.`
       // break;
        case 'user':
            return `${name} is user comsume all content.`
            //break;
    default:
        return `${name} is a trial user`
       // break;
}
}
console.log(getUserRole('madhura', 'testprep'))
console.log(getUserRole('madhu', ))  // madhu is a trial user
console.log(getUserRole('sunil', 'admin'))
console.log(getUserRole('manasu', 'subadmin'))
console.log(getUserRole('MADDY', 'user'))