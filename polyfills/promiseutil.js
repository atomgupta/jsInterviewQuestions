function createPromise(){
    return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    const num=Math.floor(Math.random()*10)
                            if(num<7){
                                reject(`${num}`)
                            }
                            else{
                                resolve(`${num}`)
                            }
                },100*Math.random())
    })
}
let arrayOfPromises=[
createPromise(),createPromise(),createPromise(),createPromise(),createPromise(),createPromise()
]
module.exports=arrayOfPromises