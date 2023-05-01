//calculate richest customer wealth
//make an array of sums
//return the max of the sums

/**
 * @param {number[][]} accounts
 * @return {number}
 */

var maximumWealth = function(accounts) {
    let sums = new Array(accounts.length).fill(0);
    let max = 0;
    for (let i = 0; i < accounts.length; i++){
        for (let j = 0; j < accounts[i].length; j++){
            sums[i] += accounts[i][j];
        }
    if (sums[i]>max) max=sums[i]    
    }

    return max;
    
};

