const arrayOfPromises= require('./promiseutil')

// Promise.any resolves as soon as a promise resolves. IT rejects if no promise resolves
function promiseAny_polyfill(promiseArray){
    let errs=[]
    let counter=promiseArray.length
    return new Promise((resolve,reject)=>{
        promiseArray.forEach((promise,index)=>{
            promise.then((res)=>{
                resolve(res)
            }).catch((err)=>{
                errs[index]={status:'failed',err}
                counter--
                if(counter==0){
                    reject(errs)
                }
            })
        })
    })
}

promiseAny_polyfill(arrayOfPromises).then(res=>console.log("something worked ",res)).catch((err)=>{console.log("nothing worked",err)})
