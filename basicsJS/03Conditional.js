// varify User authentication using conditional statements :

// var authentication = true
/*
if(authentication) {
    console.log('Show signout button')
} else {
    console.log('Show login option')
}
    */
  // authentication ?  console.log('Show signout button') :    console.log('Show login option')
  //------------------------------------

  /* Create an application with following roles:
  - admin - gets full access 
  - subadmin - gets access to create/delete courses
  - testpresp - gets access to create / delete tests
  - user - gets access to consume content 
*/

var user = "user"

switch (user) {
    case 'admin': 
    console.log('you get full access') 
        break;
        case 'subadmin': 
        console.log('gets access to create/delete courses') 
            break;
            case 'testprep': 
            console.log('gets access to create / delete tests') 
                break;
                case 'user': 
                console.log('gets access to consume content') 
                    break;

    default:
        console.log('Trial user')
        break;
}