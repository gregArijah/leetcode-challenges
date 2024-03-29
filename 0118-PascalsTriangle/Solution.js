/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const init = 1
    const result = [];
    
    for(let i = 0; i < numRows; i++){
        result[i] = [];
        for(let j = 0; j <= i; j++){

            if(j === 0 || j === i) result[i][j] = init;
            else result[i][j] = result[i-1][j-1] + result[i-1][j];
        }
    }
    return result;
};