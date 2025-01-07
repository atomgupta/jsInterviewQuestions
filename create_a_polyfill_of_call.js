Function.prototype.myCall=function(thisArg,...args){

  const functionToBeCalled=this
  let wrappedObj=Object(thisArg)
  const sym=Symbol()
  Object.defineProperty(wrappedObj,sym,{
    enumerable:false,
    value:functionToBeCalled
})
return wrappedObj[sym](...args)

}
function barSecurityAgeCheck(ageLimit){
  if(this.age<ageLimit){
    return "cant go inside"
  }
  return "welcome"
}

let obj1={
  name:"harry",
  age:20
}
let obj2={
  name:"sam",
  age:35
}

console.log(barSecurityAgeCheck.myCall(obj1,21))
console.log(barSecurityAgeCheck.myCall(obj2,21))
