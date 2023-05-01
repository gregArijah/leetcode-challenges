//calculate richest customer wealth
//instead of array use a single varible and rewrite it everytime,
//then save the highest as max on each iteration 
//return the max of the sums

/**
 * @param {number[][]} accounts
 * @return {number}
 */

var maximumWealth = function(accounts) {
    let max = 0;
    let sum = 0;
    for (let i = 0; i < accounts.length; i++){
        sum = 0;
        for (let j = 0; j < accounts[i].length; j++){
            sum += accounts[i][j];
        }
    if (sum>max) max=sum    
    }

    return max;
    
}



