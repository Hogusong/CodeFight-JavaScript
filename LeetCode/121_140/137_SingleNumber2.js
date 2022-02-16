/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
  const dict = {};
  for (let n of nums) {
      if (dict[n]) dict[n]++;
      else dict[n] = 1
  }
  for (let key in dict) if (dict[key] == 1) return key;
};