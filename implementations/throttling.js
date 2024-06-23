function throttler(fn,delay){
    let last=0
return function (...args){
let now=Date.now()
if(now-last>=delay){
    last=now
    fn.apply(null,args)
}
else{
    console.log("waittt!!")
}
}
}

let logMessage = function(message) {
    console.log(message);
};

// Create a throttled version of the example function
let throttledLogMessage = throttler(logMessage, 5000);

// Test the throttled function
throttledLogMessage("Message 1"); // Should print "Message 1"
throttledLogMessage("Message 2"); // Should print "Throttled! Wait for some time."
setTimeout(() => throttledLogMessage("Message 3"), 2500); // Should print "Message 3" after 2.5 seconds
