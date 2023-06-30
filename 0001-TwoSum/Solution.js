/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let mapper = new Map();
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (mapper.has(diff)) {
            return [mapper.get(diff), i];
        }
        mapper.set(nums[i], i);
    }
    
};
