function someAsyncTask() {
    let called = 0;
    return function () {
        ++called;
        console.log(`called async ${called} times`);
        return new Promise((resolve, reject) => {
            if (called < 31) {
                reject("hit me again...");
            } else {
                console.log("time to resolve", called);
                resolve("Alright...here is the data");
            }
        });
    };
}

function wait(delay){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(),delay)
    })
}

const problematicAsyncTask = someAsyncTask();

async function retry(asyncTask,retries,delay=500) {

  
        try{
        let res=await asyncTask()
        return Promise.resolve(res)
        }
        catch(err){
            if(retries==0){
                return Promise.reject("Retries exhausted")
             }
             else{  
        await wait(delay)
        return  retry(asyncTask,retries-1,delay)
        }
    }


}

retry(problematicAsyncTask,10).then(data=>console.log("ho gyaaa")).catch(()=>console.log("nahi hua"))