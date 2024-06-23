function debouncer(fn,delay){
let timer;
return function (...args){
clearTimeout(timer)
timer=setTimeout(()=>{
fn.apply(null,args)
},delay)
}
}

let apicalling=function(){
    console.log("api called")
}
let debouncedapicalling=debouncer(apicalling)
debouncedapicalling()
debouncedapicalling()
debouncedapicalling()
debouncedapicalling()
debouncedapicalling()
debouncedapicalling()

debouncedapicalling()
debouncedapicalling()
debouncedapicalling()
debouncedapicalling()
debouncedapicalling()
debouncedapicalling()

debouncedapicalling()
debouncedapicalling()
debouncedapicalling()
debouncedapicalling()
debouncedapicalling()
debouncedapicalling()

