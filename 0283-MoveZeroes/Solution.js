/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let count = 0;
    for(let i = 0; i < nums.length; i++) {      
        if(nums[i]!=0 && count>0){
            nums[i-count] = nums[i];
            nums[i] = 0;
        }
        else if(nums[i]==0) {
            count++;
        }
        if(i>=nums.length-count) {
            nums[i] = 0;
        }
    }
 
}
    