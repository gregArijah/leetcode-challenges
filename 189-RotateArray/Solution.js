// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
var rotate = function(nums, k) {
  
  
    
    if (k<nums.length/2 || k>nums.length) {
        // rotate right
        for (let i = 0; i < k; i++) {
            nums.unshift(nums.pop());  
        }
    }    
    else {
        // rotate left
        for (let i = 0; i < nums.length-k; i++) {
            nums.push(nums.shift());
    }
  };
  console.log(nums);
}

//call function [1,2,3]
rotate([1,2,],3);