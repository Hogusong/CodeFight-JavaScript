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

var lengthOfLongestSubstring = function(s) {
    let word = ''
    let maxLen = 0, start = 0
    for (let i = 0; i < s.length; i++) {
        const index = s.indexOf(s[i], start)
        if (start <= index && index < i) {
            maxLen = Math.max(maxLen, i - start)
            start = index + 1;
        }
    }
    return Math.max(maxLen, s.length - start);
};

var lengthOfLongestSubstring = function(s) {
    if (s === '') return 0;
    const dict = {};
    for (let c of s) dict[c] = [0, -1];
    let start = 0, maxL = 1;
    for (let i = 0; i < s.length; i++) {
        const arr = dict[s[i]];
        if (arr[0] < 1) dict[s[i]] = [1, i];
        else {
            maxL = Math.max(maxL, i - start);
            for (let j = start; j <= arr[1]; j++) dict[s[j]] = [0, -1];
            start = arr[1] + 1;
            dict[s[i]] = [1, i];
        }
    }
    return Math.max(maxL, s.length - start);
};