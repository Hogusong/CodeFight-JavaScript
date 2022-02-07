/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  const dict = {}
  for (let i = 0; i < nums.length; i++) {
      let diff = target - nums[i];
      if (dict.hasOwnProperty(diff)) return [dict[diff], i];
      dict[nums[i]] = i;
  }
};