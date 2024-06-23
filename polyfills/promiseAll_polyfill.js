const arrayOfPromises= require('./promiseutil')
// console.log("arr",arrayOfPromises)

// PromiseAll resolves if all promises resolved, rejects if anyone rejected

function promiseAll_polyfill(promiseArray){
    let results=[]
    let counter=promiseArray.length
    return new Promise((resolve,reject)=>{
        promiseArray.forEach((promise,index)=>{
            promise.then((res)=>{
                results[index]=res
                counter--
                if(counter==0){
                    resolve(results)
                }
            }).catch((err)=>{
                reject(`${index} failed with ${err} error`)
            })
        })
    })
}

promiseAll_polyfill(arrayOfPromises).then(res=>console.log("all worked",res)).catch((err)=>{console.log("something failed",err)})

