/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
    let i; 
    for (i = 0; i < nums.length-1; i++) {
        if (nums[i]==nums[i+1]){
            nums.splice(i,1)
            i--;
        }
    }
    return nums.length;
   
}