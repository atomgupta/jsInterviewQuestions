//polyfill for arr.reduce()

let arr=[1,2,3,4,5,6]
let actualreduceresult=arr.reduce((acc,current)=>acc+current,100)
console.log(actualreduceresult)


Array.prototype.reduce_polyfill=function(callback,initialValue){
    let i;
    let acc;
    let originalArray=this
    if(initialValue===undefined){
        i=1
        acc=originalArray[0]
    
    }
    else{
        i=0
        acc=initialValue

    }

    for(;i<originalArray.length;i++){
        acc=callback(acc,originalArray[i])
    }
    return acc
}
let polyfillreduceresult=arr.reduce((acc,current)=>acc+current,500)
console.log(polyfillreduceresult)
