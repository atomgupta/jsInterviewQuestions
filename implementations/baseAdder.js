function baseAdd(num){
    return function addValueToBase(number){
        return number+num
    }
}
let baseAdd6=baseAdd(6)
let result=baseAdd6(11)
console.log("result",result)

let baseAdd100=baseAdd(100)
console.log(baseAdd100(200))