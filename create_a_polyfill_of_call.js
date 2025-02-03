/**
 * Polyfill for the call method.
 * 
 * Executes the provided function with the specified `this` context and arguments.
 * 
 * @param {Object} thisArg - The value to use as `this` when calling the function.
 * @param {...*} args - The arguments to pass to the function.
 * @returns {*} The result of the function call.
 */
Function.prototype.myCall = function(thisArg, ...args) {
  // Implementation here
};
///Polyfill for call method

function checkSecurity(ageLimit){
if(this.age>=ageLimit){
  console.log(this.name + " allowed to go inside")
}
else{
  console.log(this.name + " not allowed to go")
}
}
const obj1={
  name:'bob',
  age:21
}
const obj2={
  name:'tom',
  age:18
}
Function.prototype.myCall=function(thisArg,...args){
  let context= thisArg || (typeof window!=="undefined"?window:globalThis)
  const sym= Symbol()
  context[sym]=this
  const result = context[sym](...args)
  delete context[sym]
  return result
}
checkSecurity.myCall(obj1,20)
checkSecurity.myCall(obj2,20)