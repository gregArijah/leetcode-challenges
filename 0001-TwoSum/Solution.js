/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const mapper = new Map();
    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];
      if (mapper.has(diff)) {
        return [mapper.get(diff), i];
      }
      mapper.set(nums[i], i);
    }
    return []; // No solution found
  };