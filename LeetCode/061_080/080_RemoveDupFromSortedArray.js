/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
  let index = 0, prev = nums[0], count = 1;
  for (let i = 1; i < nums.length; i++) {
      if (index > 0) {
          if (nums[i] != nums[i-1]) {
              nums[index++] = nums[i];
              count = 1;
          } else {
              if (count == 1) nums[index++] = nums[i];
              count++;
          }
      } else {
          if (nums[i] == nums[i-1]) {
              if (count == 2) index = i;
              count++;
          } else count = 1;
      }
  }
  return index == 0 ? nums.length : index;
};

// if condition is more simple than above.
var removeDuplicates = function(nums) {
  let index = 0, count = 1;
  for (let i = 1; i < nums.length; i++) {
      if (nums[i] != nums[i-1]) {
          count = 1
          if (index > 0) nums[index++] = nums[i]
      } else {
          count++
          if (count === 2 && index > 0) nums[index++] = nums[i]
          if (count > 2 && index == 0) index = i
      }
  }
  return index > 0 ? index : nums.length
};