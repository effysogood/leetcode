/**
 * @param {string} val
 * @return {Object}
 */
const expect = (val) => {
    const throwError = (errorStr) => {throw new Error(errorStr)};

    return {
        toBe: (expected) => expected === val || throwError('Not Equal'),
        notToBe: (expected) => expected !== val || throwError('Equal'),
    }

    // return {
    //     toBe: (expected) => {
    //         if (expected === val) return true;
    //         throw new Error('Not Equal')
    //     },
    //     notToBe: (expected) => {
    //         if (expected !== val) return true
    //         throw new Error('Equal')
    //     }
    // }
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */