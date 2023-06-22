//this solution returns the correct result but exceeds the time limit
//should use bit shift operation instead of repeated subraction

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {

    let isNeg = (dividend < 0) ^ (divisor < 0); //bitwise XOR
    let result = 0;

    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    while (dividend >= divisor) {
        result++;
        dividend -= divisor;
    }

    if (isNeg) result = -result;                 //change sign if needed
    if (result > (2**31)-1) result = (2**31)-1;  //control +ve overflow
    if (result < ((-2)**31)) result = ((-2)**31);    //control -ve overflow
    
    return result;
    
};

