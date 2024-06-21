//polyfill for array.map()

let arr=[1,2,3,4,5]
let actualmapresult=arr.map((item)=>item*3)
console.log(actualmapresult)


Array.prototype.map_polyfill = function(callback){
let resultArray=[]
let originalArray=this
for(let i=0;i<originalArray.length;i++){
    resultArray.push(callback(originalArray[i]))
}
return resultArray

}
let polyfillmapresult=arr.map_polyfill((item)=>item*4)
console.log(polyfillmapresult)


