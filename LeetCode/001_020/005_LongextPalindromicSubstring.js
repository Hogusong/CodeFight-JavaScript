/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
  let ans = s[0];
  for (let i = 0; i < s.length; i++) {
      const single = getPalindrome(s, i, i);
      const double = getPalindrome(s, i, i + 1);
      if (ans.length < single.length) ans = single;
      if (ans.length < double.length) ans = double;
  }
  return ans;
}

function getPalindrome(s, l, r) {
  while (l >= 0 && r < s.length && s[l] == s[r]) {
      l--;
      r++;
  }
  return s.substring(l+1, r)
}
