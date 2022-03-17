/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const dict = {}, set = new Set();
  const strs = s.split(' ');
  if (pattern.length != strs.length) return false;

  for (let i = 0; i < pattern.length; i++) {
      if (!dict[pattern[i]]) {
          if (set.has(strs[i])) return false;
          dict[pattern[i]] = strs[i];
          set.add(strs[i]);
      } else if (dict[pattern[i]] != strs[i]) return false;
  }
  return true;
};