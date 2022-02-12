/**
 * @param {string} s
 * @return {number}
 */
// Using Dictionary for Dynamic Programming.
var numDecodings = function(s) {
  if (s[0] == '0') return 0;
  dict = {};
  
  const countDecodings = (n) => {
      if (n >= s.length) return 1;
      if (s[n] == '0') return 0;
      if (dict.hasOwnProperty(n)) return dict[n]
      const oneDigit = countDecodings(n + 1);
      let twoDigits = 0;
      if (n + 2 <= s.length && +s.substring(n, n+2) < 27) {
          twoDigits = countDecodings(n + 2);
      }
      dict[n] = oneDigit + twoDigits;
      return dict[n];
  }
  
  return countDecodings(0);
};

// Using Array for Dynamic Programming.
var numDecodings = function(s) {
  if (s[0] == '0') return 0;
  const dp = new Array(s.length).fill('.')
  
  const countDecodings = (n) => {
      if (n >= s.length) return 1;
      if (s[n] == '0') return 0;
      if (dp[n] != '.') return dp[n]
      const oneDigit = countDecodings(n + 1);
      let twoDigits = 0;
      if (n + 2 <= s.length && +s.substring(n, n+2) < 27) {
          twoDigits = countDecodings(n + 2);
      }
      dp[n] = oneDigit + twoDigits;
      return dp[n];
  }
  
  return countDecodings(0);
};
