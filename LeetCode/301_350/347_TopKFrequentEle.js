/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const dict = {};
  for (let n of nums) {
      if (!dict[n]) dict[n] = 1;
      else dict[n]++;
  }
  const nDict = {};
  for (let key in dict) {
      if (!nDict[dict[key]]) nDict[dict[key]] = [key];
      else nDict[dict[key]].push(key);
  }
  
  const arr = Array.from(Object.keys(nDict));
  arr.sort((a , b) => a - b);
  let res = [];
  while (res.length < k) {
      res = [...res, ...nDict[arr.pop()]];
  }
  return res;
};