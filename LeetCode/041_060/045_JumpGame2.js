/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function(nums) {
  const jumps = new Array(nums.length);
  jumps[0] = 0;
  for (let i = 0; i < nums.length; i++) {
      for (let j = 1; j <= nums[i] && j + i < nums.length; j++) {
          if (!jumps[i+j]) jumps[i+j] = jumps[i] + 1;
          else jumps[i+j] = Math.min(jumps[i+j], jumps[i] + 1);
      }
      if (jumps[jumps.length-1]) return jumps[jumps.length-1];
  }
  return false;
}