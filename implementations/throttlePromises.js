

const promises = [
    () => fetch('https://jsonplaceholder.typicode.com/todos/1'),
    () => fetch('https://jsonplaceholder.typicode.com/todos/2'),
    () => fetch('https://jsonplaceholder.typicode.com/todos/3'),
     () => fetch('https://jsonplaceholder.typicode.com/todos/4'),
    () => fetch('https://jsonplaceholder.typicode.com/todos/5'),
    () => fetch('https://jsonplaceholder.typicode.com/todos/6'),
     () => fetch('https://jsonplaceholder.typicode.com/todos/7'),
    () => fetch('https://jsonplaceholder.typicode.com/todos/8'),
    () => fetch('https://jsonplaceholder.typicode.com/todos/9'),
     () => fetch('https://jsonplaceholder.typicode.com/todos/10'),
    () => fetch('https://jsonplaceholder.typicode.com/todos/11'),
    () => fetch('https://jsonplaceholder.typicode.com/todos/12'),
    // Add more promise functions as needed
  ];


async function throttler(arrayOfPromises,chunk){
    let finalResult=[]
    let currentCount=0
    try{
    while(currentCount<arrayOfPromises.length){
        let newSetOfPromises= arrayOfPromises.slice(currentCount,currentCount+chunk)
        currentCount+=chunk
        let result=await Promise.all(newSetOfPromises.map(p=>p()))
        finalResult.push(result)
    }
    return finalResult
}
catch(err){
    throw new Error("someone failed")
}




}

throttler(promises,3).then(data=>console.log("data received",data)).catch(err=>console.log("something failed"))