/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0, i = 0, j = height.length - 1;
    let
    while(i < j){
        let area = Math.min(height[i], height[j]) * j - i;
        if(area > max)max = area;
        height[i] < height[j] ? i++:j--;
    }
    return max;
}