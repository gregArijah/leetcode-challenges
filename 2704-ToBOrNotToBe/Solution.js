/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    if (val === undefined) {
        throw new Error('Value is undefined');
    }
    return {
        toBe: function(expected) {
            if (val === expected) {
                return true;
            } else {
                throw new Error('Not equal');
            }
        },
        notToBe: function(expected) {
            if (val !== expected) {
                return true;
            } else {
                throw new Error('Equal');
            }
        }
    };
};



/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */