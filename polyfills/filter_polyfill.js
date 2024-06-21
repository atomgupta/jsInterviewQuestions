//polyfill for arr.filter()

let arr=[1,2,3,4,5,6,7,8,9,13,12]
let actualfilterresult=arr.filter((item)=>item%2==0)
console.log(actualfilterresult)

Array.prototype.filter_polyfill=function(callback){
    if(typeof callback !== 'function'){
        throw new TypeError('Callback provided is not a function')
    }
    let originalArray=this
    if(originalArray.length==0){
        return originalArray
    }
    let resultArray=[]
    for(let i=0;i<originalArray.length;i++){
        if(callback(originalArray[i])){
            resultArray.push(originalArray[i])
        }
    }
    return resultArray
}
let polyfillfilterresult=arr.filter_polyfill((item)=>item%2!==0)
console.log(polyfillfilterresult)