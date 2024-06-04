/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
const createCounter = (init) => {
    let currentCount = init;

    return {
        increment: () => ++currentCount,
        decrement: () => --currentCount,
        reset: () => {
            return currentCount = init;
        }
    }
};


const counter = createCounter(5)
counter.increment();

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */