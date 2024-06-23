//simple curry implementation
//sum(1)(2)(3)
// function sum(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }
// const sum=(a)=>(b)=>(c)=>a+b+c
// console.log(sum(1)(2)(3))



////Create a function that allows to do the following
//evaluate('sum')(2)(4)
//evaluate('multiply')(5)(4)
// function evalaute(op){
//     return function (a){
//         return function (b){
//             switch(op){
//                 case 'sum':
//                     return a+b
//                 case 'mul':
//                     return a*b
//                 case 'div':
//                     return Math.floor(a/b)
//             }
//         }
//     }
// }

// let mul=evalaute('mul')
// console.log(mul(4)(5))




// Infinite Currying

// sum(1)(2)()
// sum(20)(30)(40)()
// sum(1)(2)(3)(4)(5)(6)(7)(8)()
// function arraySum(arr){
//     console.log("arr",arr)
//     return arr.reduce((a,c)=>a+c)
// }
// function sum(...a){
//     let x=a
// return function(b){
//     if(arguments.length==0){
//         return arraySum(a)
//     }
//     else{
//         return sum(...x,b)
//     }
    
// }
// }
// console.log(sum(20)(30)(40)())

// console.log(sum(1)(2)(3)(4)(5)(6)(7)(8)())






//////////////////////////////////////////
// other implemenation
// sum(1)(2)()
// sum(20)(30)(40)()
// sum(1)(2)(3)(4)(5)(6)(7)(8)()
// function arraySum(arr){
//     console.log("arr",arr)
//     return arr.reduce((a,c)=>a+c)
// }
// function sum(a){
// return function(b){
//     if(arguments.length==0){
//         return a
//     }
//     else{
//         return sum(a+b)
//     }
    
// }
// }
// console.log(sum(20)(30)(40)())

// console.log(sum(1)(2)(3)(4)(5)(6)(7)(8)())





// create a function that convers a function to a curried function
//like sum(a,b,c,d)=>a+b+c+d  to sum(a)(b)(c)(d)


function sum(a,b,c,d){
    return a*b*c*d
}

function curryThis(fn){
    return function curriedsum(...args){

        if(args.length>=fn.length){
                return fn.apply(null,args)
        }
        else{
            return function (...next){
                return curriedsum(...args,...next)
            }
        }
    }
}

let curriedSum=curryThis(sum)
console.log("curriedsum",curriedSum)
let res= curriedSum(1)(2)(3)(4)

console.log("res",res)
