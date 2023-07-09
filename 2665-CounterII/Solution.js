/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {

    var counter = init;

    const increment = () => counter ++;
    const decrement = () => counter --;
    const reset = () => counter = init;
    
    return {increment: increment(), decrement: decrement(), reset: reset()};
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */