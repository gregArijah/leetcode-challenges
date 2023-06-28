/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
     
    for (let i = 0; i < nums.length-1; i++) {
        if (nums[i]==nums[i+1]){
            let j = i+1;
            while (nums[i]==nums[j]){
                j++;
            }
            nums.splice(i,j-i-1)
            i--;
        }
    }
    return nums.length;	
}

