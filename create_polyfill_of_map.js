const arr=[1,,,2,3,,,4,5]
const squaredNumbers=arr.map((item)=>{
  return item*item
})
console.log(squaredNumbers)


Array.prototype.myMap=function(callback,thisArg){
  if(this==null){
    throw new TypeError("Array.prototype.map called on null or undefined")
  }
  if(typeof callback != "function"){
    throw new TypeError("Callback provided is not a function")
  }
  const O=Object(this)
  const len=O.length>>>0
  let resultArray=new Array(len)
  for(let i=0;i<len;i++){
    if(i in O){
    resultArray[i]=(callback.call(thisArg,O[i],i,O))
}
  }
  return resultArray
}

const result=arr.myMap((item)=>{return item*item})
console.log(result)
