/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
  if (strs.length < 2) return [strs];
  const dict = {};
  for (let str of strs) {
      const arr = str.split('');
      const key = arr.sort().join('');
      if (!dict[key]) dict[key] = [str];
      else dict[key].push(str);
  }
  return Object.values(dict);
}