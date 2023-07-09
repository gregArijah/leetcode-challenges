/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {

    const toBe = (test) => {
        if (val === test) return true;
        throw new Error('Not Equal');
    }
    
    const notToBe = (test) => {
        if (val !== test) return true;
        throw new Error('Equal');
    }

    return { toBe, notToBe };
}       

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */