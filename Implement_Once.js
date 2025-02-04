function Onceify(fn){
    let called=false;
    return function(...args){
        if(called){
            return
        }
        else{
            called=true
          return  fn.apply(this,args)
        }
    }
}
const obj = {
    name: 'Alice',
    sayHello: Onceify(function () {
        return `Hello, ${this.name}!`;
    }),
};

console.log(obj.sayHello()); // "Hello, Alice!"
console.log(obj.sayHello()); // undefined (function already called)