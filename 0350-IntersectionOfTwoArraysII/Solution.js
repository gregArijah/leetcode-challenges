/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let mapper = new Map();
    let result = [];

    for (let num of nums1) {
        let count = mapper.get(num) || 0;
        mapper.set(num, count + 1);
    }
    
    for (let num of nums2) {
        if (mapper.get(num)>0||false){
            result.push(num);
            mapper.set(num, mapper.get(num) - 1);
        }
    }

    return result;
};