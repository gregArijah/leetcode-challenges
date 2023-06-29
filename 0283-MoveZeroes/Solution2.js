var moveZeroes = function(nums) {
    let i = 0; // Slow pointer
    
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] !== 0) {
        // Swap non-zero element with the slow pointer position
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
      }
    }
  };
  