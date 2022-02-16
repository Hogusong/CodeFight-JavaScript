/**
 * @param {string} s
 * @return {number}
 */
// Time Limit Exceeded: 24/36 test cases passed.
var minCut = function(s) {
  let minCount = s.length - 1;
  
  const isPalindrome = (left, right) => {
      while (left < right) {
          if (s[left++] != s[right--]) return false
      }
      return true;
  }
  
  const makePartitions = (n, count) => {
      if (n == s.length) {
          if (minCount > count - 1) minCount = count - 1;
          return;
      }
      for (let i = n; i < s.length; i++) {
          if (isPalindrome(n, i)) makePartitions(i+1, count + 1)
      }
  }
  
  makePartitions(0, 0);
  return minCount;
};

// Time Limit Exceeded: 26/36 test cases passed.
var minCut = function(s) {
  const isPalindrome = (left, right) => {
      while (left < right) {
          if (s[left++] != s[right--]) return false
      }
      return true;
  }
  
  const makePartitions = (n, count, minC) => {
      if (isPalindrome(n, s.length-1)) return count;
      for (let i = s.length-1; i >= n; i--) {
          if (isPalindrome(n, i)) {
              const c = makePartitions(i+1, count+1, minC);
              minC = Math.min(minC, c);
          }
      }
      return minC;
  }
  return makePartitions(0, 0, s.length);
};

// Using a Dictionary for Dynamic Programming. All test cases are passed.
var minCut = function(s) {
  const isPalindrome = (left, right) => {
      while (left < right) {
          if (s[left++] != s[right--]) return false
      }
      return true;
  }
  
  const dict = {}
  const makePartitions = (n, count, minC) => {
      if (isPalindrome(n, s.length-1)) return count;
      for (let i = n; i < s.length; i++) {
        if (isPalindrome(n, i)) {
            if (!dict.hasOwnProperty(i+1)) dict[i+1] = makePartitions(i+1, 1, minC);
            const c = count + dict[i+1];
            minC = Math.min(minC, c);
        }
      }
      return minC;
  }
  return makePartitions(0, 0, s.length);
};
