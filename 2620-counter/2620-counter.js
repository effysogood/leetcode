/**
 * @param {number} n
 * @return {Function} counter
 */
const createCounter = (n) => {
    return () => n++;
};
console.log(createCounter)

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */