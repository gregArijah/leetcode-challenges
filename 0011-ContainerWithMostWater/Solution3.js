/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0, i = 0, j = height.length - 1;
    let bigI = i, bigJ = j;
    while(i < j){
        if(height[i] < height[bigI]){
            i++;
            continue;
        }
        else if(height[j] < height[bigJ]){
            j--;
            continue;
        }
        
        let area = Math.min(height[i], height[j]) * (j - i);
        if(area > max){
            max = area;
            bigI = i;
            bigJ = j;
        }
        height[i] < height[j] ? i++:j--;
      
    }
    return max;
}