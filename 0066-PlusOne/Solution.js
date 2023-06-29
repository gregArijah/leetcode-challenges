/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = digits.length-1; i >= 0; i--) {
        let sum = digits[i] + 1;
        if (sum < 10) {
            digits[i] = sum;
            return digits;
        } else {
            digits[i] = 0;
            if (i === 0) digits.unshift(1);
        }
    } 
    return digits; 
};