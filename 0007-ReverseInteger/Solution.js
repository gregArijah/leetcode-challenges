/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let rev = 0;
    let sign = x < 0 ? -1 : 1;
    x = Math.abs(x);
    while (x > 0) {
        rev = rev * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    rev = rev * sign;
    
    return rev > Math.pow(2, 31) - 1 || rev < Math.pow(-2, 31) ? 0 : rev;
  
    
};

