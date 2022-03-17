/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  const dict = {};
  for (let n of nums) {
      if (!dict[n]) dict[n] = 1;
      else dict[n]++;
  }
  const res = []
  for (let key in dict) {
      if (dict[key] == 1) res.push(key);
  }
  return res;
};

var singleNumber = function(nums) {
  let xy = 0;
  for (let n of nums) xy ^= n;
  xy &= -xy;
  const res = [0,0];
  for (let n of nums) {
    if (xy & n) res[0] ^= n;
    else res[1] ^= n;
  }
  return res;
}