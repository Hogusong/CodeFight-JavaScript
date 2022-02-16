/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const dict = {};
  for (let n of nums) {
      if (dict[n]) delete(dict[n]);
      else dict[n] = 1
  }
  for (let key in dict) if (dict[key] == 1) return key;
};

var singleNumber = function(nums) {
  const set = new Set();
  for (let n of nums) {
      if (set.has(n)) set.delete(n);
      else set.add(n);
  }
  return [...set][0];
};

// Above two are good to find a single one when every others appears twice.
// However, this one is good to find a single one when every others appears multi-times.
var singleNumber = function(nums) {
  const dict = {};
  for (let n of nums) {
      if (dict[n]) dict[n]++;
      else dict[n] = 1
  }
  for (let key in dict) if (dict[key] == 1) return key;
};

