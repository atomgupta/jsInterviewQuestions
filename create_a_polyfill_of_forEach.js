const arr=[1,2,,3,4,,6,7,8,9,10];

let res= arr.forEach((item)=>{console.log(item*10)})
console.log("res",res)

let cb=function(item){
    console.log("item",item + this.name)
}

Array.prototype.myForEach=function(callback,thisArg){
    if(this===null){
        throw new Error('Array.prototype.myForEach called on null or undefined');
    }
    if(typeof callback!=='function'){
        throw new Error('callback is not a function');
    }   

    let O=Object(this)
    let len=O.length>>>0
    for(let i=0;i<len;i++){
        if(i in O){
            callback.call(thisArg,this,O[i],i,this)
        }
    }
}
const obj1={
    name:"tom",
    age:25
}
arr.myForEach(cb,obj1)