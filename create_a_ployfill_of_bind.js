Function.prototype.myBind = function (thisArg, ...args1) {
  // Ensure `this` is a function
  if (typeof this !== 'function') {
    throw new TypeError('myBind must be called on a function');
  }

  // Store the original function
  const originalFunc = this;

  // Create the bound function
  const boundFunc = function (...args2) {
    // If called with `new`, ignore `thisArg` and use the new instance as `this`
    if (this instanceof boundFunc) {
      return originalFunc.apply(this, [...args1, ...args2]);
    }

    // Otherwise, use `thisArg` as the `this` value
    return originalFunc.apply(thisArg, [...args1, ...args2]);
  };

  // Preserve the prototype chain
  if (originalFunc.prototype) {
    boundFunc.prototype = Object.create(originalFunc.prototype);
  }

  // Preserve function properties (e.g., `name` and `length`)
  Object.defineProperties(boundFunc, {
    name: {
      value: `bound ${originalFunc.name}`,
    },
    length: {
      value: Math.max(0, originalFunc.length - args1.length),
    },
  });

  return boundFunc;
};

function passJudgement(){
  if(this.age>30){
    return "experienced killer"
  }
  return "new killer"
}
let criminal1={
  name:"harry",
  age:35
}
let criminal1Judgement=passJudgement.myBind(criminal1)
let criminal2={
  name:"sam",
  age:20
}
console.log(criminal1Judgement.call(criminal2))
console.log(criminal1Judgement()) //experienced killer
