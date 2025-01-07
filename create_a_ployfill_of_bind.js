Function.prototype.myBind=function(thisArg,...args1){
 let wrappedObj=Object(thisArg)
  let sym=Symbol()
  return function(...args2){
    Object.defineProperty(wrappedObj,sym,{
    enumerable:false,
    value:this})
  return wrappedObj[sym](...args1,...args2)
  }
  
}

function passJudgement(){
  if(this.age>30){
    return "experienced killer"
  }
  return "new killer"
}
let criminal1={
  name:"harry",
  age:35
}
let criminal1Judgement=passJudgement.myBind(criminal1)
criminal1={
  name:"sam",
  age:20
}
criminal1Judgement() //experienced killer
