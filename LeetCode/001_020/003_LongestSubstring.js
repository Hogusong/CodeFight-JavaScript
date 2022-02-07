/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  let word = ''
  let maxLen = 0
  for (let w of s) {
      const index = word.indexOf(w)
      if (index >= 0) {
          maxLen = Math.max(maxLen, word.length)
          word = word.substr(index + 1)
      }
      word += w
  }
  return Math.max(maxLen, word.length)
};