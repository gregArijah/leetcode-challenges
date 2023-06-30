/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
    
    let output = strs[0];
    let res = "";

    for (let i=1; i< strs.length; i++){

        for ( let j = 0; j < strs[i].length; j++){
            if (output[j] == strs[i][j]) {
                res += output[j]    
            }
            else break;
        }
        output = res;
        res ="";
    }    
    return output;
};

console.log(longestCommonPrefix(["flower","flow","flight"] ))