function logSomeJapanese() {
  console.log('こんにちは');
}


function debouncer(fn,delay,immediate=false){
    let timerId;
    return function(...args){
        clearTimeout(timerId)
    if(immediate && !timerId){
            fn.apply(this,args)
    }
        timerId=setTimeout(()=>{
            if(!immediate){
            fn.apply(this,args)
            }
            timerId=null
        },delay)

    }
}

const debouncedLogSomeJapanese=debouncer(logSomeJapanese,1000,true)
debouncedLogSomeJapanese()
debouncedLogSomeJapanese()
debouncedLogSomeJapanese()
