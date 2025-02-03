let arr=[1,,2,,3,,4,,5,,6,,7,,8,,9,,10]


let result=arr.filter((item)=>{
    return item%2==0
})
console.log("result",result)

Array.prototype.myFilter=function(cb){
    if(this===null){
        throw new Error('Array.prototype.filter called on null or undefine')
    }
    if(typeof cb!=='function'){
        throw new Error('callback is not a function')
    }
    let O=Object(this)
    let len=O.length>>>0
    let resultArray=[]
    for(let i=0;i<len;i++){
        if(i in O){
            if(cb.call(this,O[i],i,this)){
                resultArray.push(O[i])
            }
        }
    }
    return resultArray
}

let res=arr.myFilter((item)=>{
    return item%2==0
})
console.log("res",res)