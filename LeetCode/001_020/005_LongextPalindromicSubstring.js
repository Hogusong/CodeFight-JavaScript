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

//////////////
var longestPalindrome = function(s) {
  let ans = [0,1];
  for (let i = 0; i < s.length; i++) {
      const [l1, r1] = getPalindrome(s, i, i);
      const [l2, r2] = getPalindrome(s, i, i + 1);
      if (ans[1] - ans[0] < r1 - l1) ans = [l1, r1];
      if (ans[1] - ans[0] < r2 - l2) ans = [l2, r2];
  }
  return s.substring(ans[0], ans[1]);
}

function getPalindrome(s, l, r) {
  while (l >= 0 && r < s.length && s[l] == s[r]) {
      l--;
      r++;
  }
  return [l+1, r]
}

