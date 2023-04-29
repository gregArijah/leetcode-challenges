/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    //array of squares
    let squares = [];
    //start and end pointers 
    let start = 0;
    let end = nums.length - 1;
    
    //loop through array 
    for (let i = end; i >= 0 ; i--) {
        //compare squares of start and end pointers
        if (nums[start]**2 > nums[end]**2) {
            //push square of start pointer to relative end of squares array
            squares[i]=(nums[start]**2);
            //increment start pointer
            start++;
        }
        else {
            squares[i]=(nums[end]**2);
            //decrement end pointer
            end--;
        }
    }
    return squares;

};