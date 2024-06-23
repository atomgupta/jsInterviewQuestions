Function.prototype.call_polyfill=function(context,...args){
    if(context==null){
        context= typeof global==='undefined' ? window:global
    }
    args=args||[]

    let sym=Symbol()
    context[sym]=this
    const result= context[sym](...args)
    delete context[sym]
    return result
}

function a(...args){
    console.log("args",args)
}
a()