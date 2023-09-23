/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    var currVal=init;
    return{
        reset:()=>{
            currVal=init;
            return currVal
        },
        increment:()=>{
            return currVal+=1
        },
        
        decrement:()=>{
            return currVal-=1
        },
        
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
