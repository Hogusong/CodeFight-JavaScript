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

var wordBreak = function(s, wordDict) {
    const dict = {}, wDict = {};
    for (let w of wordDict) {
        if (wDict[w[0]]) wDict[w[0]].push(w);
        else wDict[w[0]] = [w];
    }
    const dfs = (i) => {
        if (i >= s.length) return true;
        if (!wDict[s[i]]) return false;
        if (dict[i]) return dict[i] === 'T';
        for (let word of wDict[s[i]]) {
            const len = word.length;
            if (s.substring(i, i+len) == word && dfs(i+len)) {
                dict[i] = 'T';
                return true;
            }
        }
        dict[i] = 'F';
        return false;
    }
    return dfs(0);
}

var wordBreak = function(s, wordDict) {
    const dp = [];
    
    const dfs = (i) => {
        if (i >= s.length) return true;
        if (dp[i]) return dp[i] == 'T';
        for (let word of wordDict) {
            const len = word.length;
            if (s.substring(i, i + len) == word) {
                if (dfs(i + len)) {
                    dp[i] = 'T';
                    return true;
                }
            }
        }
        dp[i] = 'F';
        return false
    }
    
    return dfs(0);
}

var wordBreak = function(s, wordDict) {
    const dp = [];
    dp[s.length] = true;
    for (let i = s.length - 1; i >= 0; i--) {
        if (dp[i]) continue;
        for (let w of wordDict) {
            if (i + w.length <= s.length) {
                if (s.substring(i, i + w.length) === w) {
                    dp[i] = dp[i + w.length];
                }
                if (dp[i]) break;
            }
        }
    }
    return dp[0] === true;
}
