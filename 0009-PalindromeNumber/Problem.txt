/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var reverse = 0
    var number = x

    while(number > 0) {
        reverse = (reverse*10)+(number%10)
        number = Math.floor(number/10)
    }

    if (reverse === x) {
        return true
    } else {
        return false
    }
};