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

var singleNumber = function(nums) {
  const dict = {};
  for (let n of nums) {
      if (dict[n]) {
          if (dict[n] == 2) delete dict[n];
          else dict[n]++;
      } else dict[n] = 1
  }
  return Object.keys(dict)[0];
};