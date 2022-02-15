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
