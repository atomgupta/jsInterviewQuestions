
let arr=[1,2,,3,4,,6,7,8,9,10];
let result=arr.map((item)=>{
  console.log("item",item)
  return item*2
})
console.log("result",result)

Array.prototype.myMap=function(callback,thisArg){

  if(this===null){
    throw new Error('Array.prototype.myMap called on null or undefined');
  }
  if(typeof callback!=='function'){
    throw new Error('callback is not a function');
  }
  let O=Object(this)
  let len=O.length>>>0
  let newArray = new Array(len)

  for(let i=0;i<len;i++){
    if(i in O){
      newArray[i]=callback.call(thisArg,this[i],i,this)
    }
  }
  return newArray

}

let res=arr.myMap((item)=>{
  return item*2
})
console.log("res",res)