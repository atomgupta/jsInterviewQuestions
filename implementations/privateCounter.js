/**
 * Factory function to create a counter with private state.
 * 
 * @returns {Object} An object with methods to increment, decrement, and get the count.
 */
function createCounter() {
    let _count = 0;

    /**
     * Increments the count by a specified amount.
     * 
     * @param {number} [updateByCount=1] - The amount to increment by. Defaults to 1 if not specified.
     */
    function incrementCount(updateByCount = 1) {
        _count += updateByCount;
    }

    /**
     * Decrements the count by a specified amount.
     * 
     * @param {number} [updateByCount=1] - The amount to decrement by. Defaults to 1 if not specified.
     */
    function decrementCount(updateByCount = 1) {
        _count -= updateByCount;
    }

    /**
     * Gets the current count.
     * 
     * @returns {number} The current count.
     */
    function getCount() {
        return _count;
    }

    return {
        incrementCount,
        decrementCount,
        getCount
    };
}

// Example usage:
const counter1 = createCounter();
counter1.incrementCount();
console.log(counter1.getCount()); // Outputs: 1

counter1.incrementCount(5);
console.log(counter1.getCount()); // Outputs: 6

counter1.decrementCount();
console.log(counter1.getCount()); // Outputs: 5

counter1.decrementCount(3);
console.log(counter1.getCount()); // Outputs: 2

const counter2 = createCounter();
counter2.incrementCount();
counter2.incrementCount(2);
console.log(counter2.getCount()); // Outputs: 3
