let obj1={
    name:'adam',
    age:24,
    gender:'male',
    address:{
        city:'pune',
        state:'Mh',
        country:'IN',
        coowners:['shubham','saurabh'],
        apartment:{
            flatno:103,
            floor:3,
            wing:'c',
        }
    }
}


function deepCopy(obj){
    if(typeof obj==null || typeof obj !=='object'){
        return obj
    }
    else if(obj instanceof Array){
        let arrayCopy=[]
        for(let i=0;i<obj.length;i++){
            arrayCopy[i]=deepCopy(obj[i])
        }
        return arrayCopy
    }
    else{
        let objectcopy={}
        for (let key in obj){
            objectcopy[key]=deepCopy(obj[key])
        }
        return objectcopy
    }
}
let c=deepCopy(obj1)
c.name='aaaaa'
c.coowners=c.address.coowners.push('someone')
console.log("c",obj1,c)