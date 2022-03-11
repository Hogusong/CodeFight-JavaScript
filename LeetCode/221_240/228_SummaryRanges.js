/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  if (nums.length < 1) return [];
  const output = []
  let start = nums[0];
  for (let i = 1; i < nums.length; i++) {
      if (nums[i] === nums[i-1] + 1) continue;
      if (start === nums[i-1]) output.push('' + start);
      else output.push(start + '->' + nums[i-1]);
      start = nums[i];
  }
  if (start === nums.at(-1)) output.push('' + start);
  else output.push(start + '->' + nums.at(-1));
  
  return output;
};