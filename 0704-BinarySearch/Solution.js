/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//binary search algorithm
var search = function(nums, target) {
    
    //set low and high markers
    let lowmarker = 0;
    let highmarker = nums.length-1;

    //split array in half and check if target is in first or second half
    while (lowmarker <= highmarker){
        let checkVal = Math.round((highmarker + lowmarker) / 2);
        if (target == nums[checkVal]){
            return checkVal; 
        }
        else if(target < nums[checkVal]) {
            highmarker = checkVal-1;
        }
        else lowmarker = checkVal+1;
    }

    //if target is not in array, return -1
    return -1
};