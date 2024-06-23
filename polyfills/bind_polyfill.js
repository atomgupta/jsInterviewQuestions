/**
 * Polyfill for Function.prototype.bind.
 * 
 * @param {Object} context - The context (value of `this`) to be used when calling the function.
 * @param {...*} args - The arguments to prepend to those provided when the bound function is called.
 * @returns {Function} A bound function.
 */
Function.prototype.bind_polyfill = function(context, ...args) {
    if (context == null) {
        context = typeof global === 'undefined' ? window : global;
    }
    
    const functionToBeCalled = this;

    return function(...args2) {
        return functionToBeCalled.apply(context, [...args, ...args2]);
    };
};

// Example usage
function greet(greeting) {
    console.log(`${greeting}, ${this.name}!`);
}

const obj = { name: 'Alice' };

const boundGreet = greet.bind_polyfill(obj, 'Hello');
boundGreet(); // Outputs: "Hello, Alice!"
