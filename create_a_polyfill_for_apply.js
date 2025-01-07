Function.prototype.myApply(thisArg,args=[]){
  let wrappedObj= Object(thisArg)
  const sym=Symbol()
  Object.defineProperty(wrappedObj,sym,{
    enumerable:false,
    value:this
  })
  return wrappedObj[sym](...args)
}

function createCocktail(base="rum",mixer="coke",topping="lemon"){

  return `Here is your ${base}/${mixer}/${topping} cocktail`
}
let customer1={
  name:"harry",
  age:35
}
createCocktail.apply(customer1,["blacklabel whiskey","water","basil"])
createCocktail.myApply(customer1,["blacklabel whiskey","water","basil"])
