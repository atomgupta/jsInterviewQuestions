Function.prototype.apply_polyfill = function(context, args) {
    // If context is null or undefined, default to global object (window in browsers)
    if (context == null) {
        context = typeof global === 'undefined' ? window : global;
    }

    // Ensure args is an array or undefined
    args = args || [];

    // Create a unique property on the context to avoid overwriting
    const sym = Symbol();

    // Assign the function to the unique property on the context
    context[sym] = this;

    // Call the function with spread args and store the result
    const result = context[sym](...args);

    // Delete the temporary property
    delete context[sym];

    // Return the result of the function call
    return result;
};

// Example usage
function greet(greeting, name) {
    console.log(`${greeting}, ${name}!`);
}

const obj = {
    message: 'Hello'
};

greet.apply_polyfill(obj, ['Hi', 'John']); // Outputs: "Hi, John!"
