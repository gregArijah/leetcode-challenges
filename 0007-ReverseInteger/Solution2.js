/**
 * @param {number} x
 * @return {number}
 */

//recursive solution
function revRecur(x,rev) {    
            if (x === 0) return (rev > Math.pow(2,31-1) || rev < Math.pow((-2),31) ? 0 : rev); 
            return revRecur(Math.trunc(x / 10),rev * 10 + x % 10);
        }

var reverse = function(x) {
        let rev = 0;  
        return revRecur(x, rev);      
}


