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

var isIsomorphic = function(s, t) {
  const sDict = {}, tDict = {}, set = new Set();
  for (let i = 0; i < s.length; i++) {
      if (!sDict[s[i]]) sDict[s[i]] = [i];
      else sDict[s[i]].push(i)

      if (!tDict[t[i]]) tDict[t[i]] = [i];
      else tDict[t[i]].push(i)
  }
  for (let i = 0; i < s.length; i++) {
      if (set.has(s[i])) continue;
      set.add(s[i]);
      if (!isSamePattern(sDict[s[i]], tDict[t[i]])) return false
  }
  return true;
};

function isSamePattern(sArr, tArr) {
  for (let i = 0; i < sArr.length; i++) {
      if (sArr[i] != tArr[i]) return false;
  }
  return true;
}