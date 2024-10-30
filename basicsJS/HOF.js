// Higher Order Function :

function salary(num) {
    return num * .7
}
// console.log(salary(100))
setTimeout(salary, 300)

// 
const mysalaries = [ 50, 40, 60, 20, 300, 400 ]

mysalaries.filter(n => n > 50).filter().map()
//-------------------------------------------------
/*
() => {}   // arrow functon
(func) => {}
(func) => () => {}
(func) => async () => {}
*/
const asyncHandler = (fn) => async(req, res, next) => {
    try {
        await fn(req, res, next)
    } catch (error) {
        
    }
}