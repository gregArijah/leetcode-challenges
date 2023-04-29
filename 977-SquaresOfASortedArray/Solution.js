/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    
    //array to hold negative numbers
    let negNums = [];

  //loop through array and move negative numbers to negNums array
    while (nums.length) {
        //if number is negative, push to front of negNums array
        if (nums[0] < 0) {
            negNums.unshift(-1*nums.shift());
        }
        //if number is positive, break out of loop
        else {
            break;
        }
    }

    //if there are no positive numbers, square and return negNums array
    if (nums.length == 0) {
        return negNums.map(x => x**2);
    };
    if (negNums.length > 0){
    //loop through nums array
        for (let i = 0; i < nums.length; i++) {
            //if first number in negNums is less than ith number in nums
            if (negNums[0] <= nums[i]) {
                //insert first number in negNums to nums at index i and square it
                nums.splice(i, 0, negNums.shift());
            }
            
        }        
    }
    return nums.concat(negNums).map(x => x**2);
};