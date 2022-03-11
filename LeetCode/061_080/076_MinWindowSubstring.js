/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
  if (s.length < t.length) return '';
  const dict = {};
  for (let n = 1; n <= 128 ; n++) dict[String.fromCharCode(n)] = 0;
  for (let c of t) dict[c]++;
  
  let start = -1, end = -1, low = 0, count = 0;
  for (let i = 0; i < s.length; i++) {
      if (dict[s[i]] > 0) count++;
      dict[s[i]]--;
      if (count == t.length) {
          while (low < i && dict[s[low]] < 0) dict[s[low++]]++;
          if (end < 0 || end - start > i - low) {
              end = i;
              start = low;
          }
          dict[s[low++]]++;
          count--;
      }
  }
  return start < 0 ? '' : s.substring(start, end + 1);
}

var minWindow2 = function(s, t) {
  if (s.length === 0 || t.length === 0) return '';

  dictT = {};
  for (let chr of t) {
    dictT[chr] = dictT[chr] ? dictT[chr] + 1 : 1;
  }
  const uniqueInT = Object.keys(dictT).length;

  let l = 0, r = 0, dictWin = {}, uniqueInWin = 0;
  const ans = [-1, 0, 1];

  while (r < s.length) {
    let chr = s[r];
    if (dictT[chr]) {
      dictWin[chr] = dictWin[chr] ? dictWin[chr] + 1 : 1;
      if (dictWin[chr] === dictT[chr]) uniqueInWin ++;
    }

    while (l <= r && uniqueInT === uniqueInWin) {
      chr = s[l];

      if (ans[0] < 0 || r - l + 1 < ans[0]) {
        ans[0] = r - l + 1;
        ans[1] = l;
        ans[2] = r;
      }
      if (dictT[chr]) {
        dictWin[chr] --;
        if (dictT[chr] > dictWin[chr]) uniqueInWin --;
      }
      l++;
    }
    r++;
  }
  return ans[0] < 0 ? '' : s.substring(ans[1], ans[2]+1);
}

var minWindow = function(s, t) {
  if (s.length < t.length) return '';
  if (s.includes(t)) return t;
  const dict = {};
  for (let c of t) {
      if (!dict[c]) dict[c] = 1;
      else dict[c]++;
  }
  
  let start = -1, end = -1, low = 0, count = 0;
  for (let i = 0; i < s.length; i++) {
      if (!dict.hasOwnProperty(s[i])) continue;
      if (dict[s[i]] > 0) count++;
      dict[s[i]]--
      if (count == t.length) {
          while (low < i && (!dict.hasOwnProperty(s[low]) || dict[s[low]] < 0)) {
              if (dict.hasOwnProperty(s[low])) dict[s[low]]++;
              low++;
          }
          if (end < 0 || end - start > i - low) {
              start = low;
              end = i;
          }
          dict[s[low++]]++;
          count--
      }
  }
  return start < 0 ? '' : s.substring(start, end + 1);
}

console.log(minWindow("ADOBECODEBANC", "ABC"));