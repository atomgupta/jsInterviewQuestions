function Throttler(fn, delay) {
    let previousExecutedTime = 0;
    let timeoutId;

    return function (...args) {
        const currTime = Date.now();
        const context = this;

        // Calculate the time elapsed since the last execution
        const timeSinceLastExecution = currTime - previousExecutedTime;

        if (timeSinceLastExecution >= delay) {
            // If the delay has passed, execute the function immediately
            if (timeoutId) {
                clearTimeout(timeoutId);
                timeoutId = null;
            }
            fn.apply(context, args);
            previousExecutedTime = currTime;
        } else if (!timeoutId) {
            // If there's no active timeout, schedule the function to run at the end of the delay
            timeoutId = setTimeout(() => {
                fn.apply(context, args);
                previousExecutedTime = Date.now();
                timeoutId = null;
            }, delay - timeSinceLastExecution);
        }
    };
}