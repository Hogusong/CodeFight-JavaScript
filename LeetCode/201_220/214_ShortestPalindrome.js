/**
 * @param {string} s
 * @return {string}
 */
// Time Limit Exceeded. 120/121 test cases passed.
var shortestPalindrome = function(s) {
  if (s.length < 2) return s;
  let index = s.length - 1;
  while (!isPalindrome(s, index)) index--;
  const back = s.substring(index + 1).split('');
  return back.reverse().join('') + s;
};

function isPalindrome(s, r) {
  let l = 0;
  while (l < r) {
      if (s[l++] !== s[r--]) return false;
  }
  return true;
}

//  Passed
 var shortestPalindrome = function(s) {
  const len = s.length;
  const str = s.split('').reverse().join('');
  let index = 0;
  while (index < len && s.substring(0,len - index) !== str.substring(index)) index++;
  return str.substring(0, index) + s
}