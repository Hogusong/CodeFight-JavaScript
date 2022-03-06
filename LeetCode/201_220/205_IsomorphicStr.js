/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
  const set = new Set();
  for (let i = 0; i < s.length; i++) {
      if (set.has(s[i])) continue;
      set.add(s[i]);
      if (!hasSamePattern(s, t, i)) return false;
  }
  return true
};

function hasSamePattern(s, t, i) {
  let is = i, it = i;
  while (true) {
      is = s.indexOf(s[i], is+1);
      it = t.indexOf(t[i], it+1);
      if (is != it) return false;
      if (is < 0) break;
  }
  return it < 0;
}