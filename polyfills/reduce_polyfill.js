//polyfill for arr.reduce()

let arr=[1,2,3,4,5,6]
let actualreduceresult=arr.reduce((acc,current)=>acc+current,100)
console.log(actualreduceresult)


Array.prototype.reduce_polyfill=function(callback,initialValue){
let accumulator=initialValue
for(let i=0;i<this.length;i++){
    accumulator=accumulator!==undefined?callback(this[i]):this[0]
}
return accumulator
}
let polyfillreduceresult=arr.reduce((acc,current)=>acc+current)
console.log(polyfillreduceresult)
