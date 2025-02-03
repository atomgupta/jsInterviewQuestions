function createCocktail(base,mixer,topping){
  return `${this.name} :  your drink is ready which is called ${getDrinkName.apply(undefined,[base,mixer,topping])}`
}
function getDrinkName(base,mixer,topping){
  return `${base.toUpperCase()}-${mixer.toLowerCase()}-${topping.toUpperCase()}`
}

let obj1={
  name:"tom",
}

console.log(createCocktail.apply(obj1,['rum','coke','lemon']))

Function.prototype.myApply=function(thisArg,args){
let context = thisArg || (typeof window!=='undefined'? window:globalThis)
const sym=Symbol()
context[sym] = this
const result = context[sym](...args) 
delete context[sym]
return result
}
let obj2={
  name:'bob'
}
console.log(createCocktail.myApply(obj2,['gin','ice','berry']))


