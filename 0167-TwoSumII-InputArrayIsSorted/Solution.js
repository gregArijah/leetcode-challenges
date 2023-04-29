/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let start = 0;
    let end = numbers.length - 1;
    
    while (start < end) {
        let result = numbers[start] + numbers[end];
        if (result === target) {
            return [++start, ++end];
        }
        else if (result < target) {
            start++;
        }
        else {
            end--;
        }
    }
};