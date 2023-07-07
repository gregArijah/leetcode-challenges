// /**
//  * @param {number} n
//  * @return {number}
//  */
// var trailingZeroes = function(n) {
//     function getFactorial(x){
//         return (x==0? 1: (BigInt(x)*BigInt(getFactorial(x-1))))
//     }
//     let i=0;
//     function result(y){
//         console.log(y)
//         console.log(i)
//         console.log(y%BigInt(Math.pow(10,i+1)))

//         return y%BigInt(Math.pow(10,i+1))!==0n? i: ++i && result(y)
//     }
//     return result(getFactorial(n));
// };

// console.log(trailingZeroes(100));


/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    function getFactorial(x){
        return x === 0 ? BigInt(1) : BigInt(x) * BigInt(getFactorial(x - 1));
    }
    
    let i = 0;
    
    function result(y){
        return y % (BigInt(Math.pow(10, i + 1))) !== 0n ? i : ++i && result(y);
    }
    
    return result(getFactorial(n));
};

console.log(trailingZeroes(1000));
