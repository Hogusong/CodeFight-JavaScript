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

var groupAnagrams = function(strs) {
  if (strs.length < 2) return [strs];
  const dict = {}, arr = new Array(26).fill(0);
  
  const getKey = (str) => {
      const count = [...arr];
      for (let c of str) {
          const i = c.charCodeAt() - 97;
          count[i]++;
      }
      return count.join(',');
  }
  
  for (let str of strs) {
      const key = getKey(str);
      if (!dict[key]) dict[key] = [str];
      else dict[key].push(str);
  }
  
  return Object.values(dict);
}