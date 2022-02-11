/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = function(nums) {
  const result = [[]];
  const set = new Set();
  for (let x of nums) {
      const temp = [...result];
      for (let t of temp) {
          const ans = [...t,x];
          const key = ans.sort((a,b) => a - b).join(',');
          if (!set.has(key)) result.push(ans);
          set.add(key);
      }
  }
  return result;
}
