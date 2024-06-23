const arrayOfPromises= require('./promiseutil')

// PromiseAllSettled resolves when all promises have been settled

function promiseAllSettled_polyfill(promiseArray){
    let results=[]
    let counter=promiseArray.length
    return new Promise((resolve,reject)=>{
        promiseArray.forEach((promise,index)=>{
            promise.then((res)=>{
                results[index]={status:'success',res}
                counter--
                if(counter==0){
                    resolve(results)
                }
            }).catch((err)=>{
                results[index]={status:'failed',err}
                counter--
                if(counter==0){
                    resolve(results)
                }
            })
        })
    })
}

promiseAllSettled_polyfill(arrayOfPromises).then(res=>console.log("all worked",res)).catch((err)=>{console.log("something failed",err)})
