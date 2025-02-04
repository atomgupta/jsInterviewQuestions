function memoize(fn) {
    const cache = new Map();

    return function(...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    };
}

// Example usage:
function expensiveCalculation(a, b) {
    console.log('Calculating...');
    return a + b;
}

const memoizedCalculation = memoize(expensiveCalculation);

console.log(memoizedCalculation(2, 3)); // Calculating... 5
console.log(memoizedCalculation(2, 3)); // 5 (from cache)
console.log(memoizedCalculation(4, 5)); // Calculating... 9
console.log(memoizedCalculation(4, 5)); // 9 (from cache)