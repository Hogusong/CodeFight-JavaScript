/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  const result = [];

  const breakWord = (str, ans) => {
    if (str.length == 0) {
      result.push(ans.join(' '));
      return;
    }
    for (let w of wordDict) {
      if (str.substring(0, w.length) == w) {
        ans.push(w);
        breakWord(str.substring(w.length), ans);
        ans.pop();
      }
    }
  }

  breakWord(s, []);
  return result;
}
