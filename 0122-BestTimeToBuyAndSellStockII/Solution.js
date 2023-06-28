/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0, buyValue = 0;
    let openPosition = false;
    
    for (let i = 0; i < prices.length; i++) {   
        if (!openPosition && prices[i] < (prices[i+1]||0)){   //buy if no open position and price is less than next price
            buyValue = prices[i];                             //entry value = price      
            openPosition = true;                              //open position                              
        }
        else if (openPosition && prices[i] > (prices[i+1]||0)){ //sell if open position and price is greater than next price
            profit += prices[i] - buyValue;                     //profit = closing price - entry value
            openPosition = false;                               //close position    
        }
       
    }
    return profit;
};