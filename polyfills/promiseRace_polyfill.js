const arrayOfPromises= require('./promiseutil')

// Promise.race resolves as soon as a promise resolves. IT rejects if no promise resolves
function promiseRace_polyfill(promiseArray){
    
    let settled=false
    let counter=promiseArray.length
    return new Promise((resolve,reject)=>{
        promiseArray.forEach((promise,index)=>{
            if(settled){
                return
            }
            else{
            promise.then((res)=>{
                settled=true
                resolve(res)
            }).catch((err)=>{
                settled=true
                    reject("something failed")
                
            })
        }
        })
    })
}

promiseRace_polyfill(arrayOfPromises).then(res=>console.log("something worked ",res)).catch((err)=>{console.log("nothing worked",err)})
