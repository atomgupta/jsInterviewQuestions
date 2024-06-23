/**
 * Simulates a time-consuming function by introducing a delay.
 * 
 * @param {string} fishName - The name of the fish.
 * @param {string} fishColor - The color of the fish.
 * @returns {string} A message indicating the fish is found.
 */
function findingFish(fishName, fishColor) {
    // Simulating a time-consuming operation
    for (let i = 0; i < 5000000000; i++) {}

    return `${fishName} of ${fishColor} found`;
}

/**
 * Memoizes the provided function.
 * 
 * @param {Function} fn - The function to memoize.
 * @returns {Function} The memoized function.
 */
let memoizer = function(fn) {
    let cache = {};
    return function(...args) {
        let argString = JSON.stringify(args);
        if (cache.hasOwnProperty(argString)) {
            return cache[argString];
        } else {
            let res = fn.apply(null, args);
            cache[argString] = res;
            return res;
        }
    };
};

// Create a memoized version of findingFish
let memoizedFindingFish = memoizer(findingFish);

// Test the memoized function
console.log(memoizedFindingFish('dory', 'blue')); // First call, should compute
console.log(memoizedFindingFish('dory', 'red'));  // First call, should compute
console.log(memoizedFindingFish('dory', 'blue')); // Cached result
console.log(memoizedFindingFish('nemo', 'orange')); // First call, should compute
console.log(memoizedFindingFish('dory', 'red'));  // Cached result
console.log(memoizedFindingFish('nemo', 'orange')); // Cached result
console.log(memoizedFindingFish('dory', 'blue')); // Cached result
console.log(memoizedFindingFish('nemo', 'pink')); // First call, should compute
console.log(memoizedFindingFish('dory', 'blue')); // Cached result
