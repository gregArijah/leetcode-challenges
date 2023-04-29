/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//return the index of the target if it exists in the array
//if it doesn't exist, return the index where it would be if it were inserted in order

var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    
    while(start <= end){
        let mid = Math.floor((start + end) / 2);
        if(nums[mid] === target){
            return mid;
        } else if(nums[mid] > target){
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return start;
    
};