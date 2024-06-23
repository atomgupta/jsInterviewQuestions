/**
 * 
 * @param {Function} fn - The function that is to be restricted to be called once 
 * @param {Object} [context] - the context to bind to fn 
 * @returns {Function} - the function that can be called only once
 */

function onceify(fn,context){
    let functionToCall=fn
    return function(){
        if(functionToCall){
            functionToCall.apply(context|| this,arguments)
            functionToCall=null
        }
    }
}
/**
 * Asks for user to accept cookies
 * @param {String} name 
 * @param {Number} age 
 * @param {String} gender 
 */
function askForCookies(name,age,gender){
    console.log("this",this)
    console.log("accept cookies please",name,age,gender)
}
let askForCookies_once=onceify(askForCookies)


let name='adam'
let age=23
let gender='male'


let user={
    name,age,gender
}
askForCookies_once.call(null,name,age,gender)
askForCookies_once()
// askForCookies_once()
// askForCookies_once()

// askForCookies_once()
