/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// Time Limit Exceeded: 35/45 test cases passed.
var wordBreak = function(s, wordDict) {
  const breakWord = (str) => {
      if (wordDict.includes(str)) return true;
      for (let word of wordDict) {
          const len = word.length;
          if (str.substring(0, len) == word) {
              if (breakWord(str.substring(len))) return true;
          }
      }
      return false;
  }
  
  return breakWord(s);
}

var wordBreak = function(s, wordDict) {
  const dict = {};
  
  const breakWord = (str) => {
      if (wordDict.includes(str)) return true;
      if (dict.hasOwnProperty(str)) return dict[str];
      for (let word of wordDict) {
          const len = word.length;
          if (str.substring(0, len) == word) {
              const key = str.substring(len);
              if (!dict.hasOwnProperty(key)) dict[key] = breakWord(key);
              if (dict[key]) return true;
          }
      }
      return false;
  }
  
  return breakWord(s);
}

