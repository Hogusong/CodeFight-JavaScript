/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
  s = s.toLowerCase();
  let left = 0, right = s.length - 1;
  const strs = 'abcdefghijklmnopqrstuvwxyz0123456789'
  while (left < right) {
      while (left < right && !strs.includes(s[left])) left++;
      while (left < right && !strs.includes(s[right])) right--;
      if (s[left++] != s[right--]) return false;
  }
  return true;
}

var isPalindrome = function(s) {
  let l = 0, r = s.length - 1;
  s = s.toLowerCase();
  while (l < r) {
      while (l < r && !isAlphaNumeric(s[l])) l++;
      while (l < r && !isAlphaNumeric(s[r])) r--;
      if (s[l++] != s[r--]) return false;
  }
  return true;
}

function isAlphaNumeric(c) {
  const n = c.charCodeAt();
  return (n > 96 && n < 123) || (n > 47 && n < 58);
}
