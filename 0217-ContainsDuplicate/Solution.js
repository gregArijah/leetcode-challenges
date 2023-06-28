/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let setter = new Set();
    for (let num of nums) {
        if (setter.has(num)) return true; 
        else setter.add(num);
    }

    return false;
};