/**
 * @param {string} s
 * @return {string[][]}
 */
 var partition = function(s) {
  if (s.length == 1) return [[s]];
  const result = [];
  
  const isPalindrome = (str) => {
    let left = 0, right = str.length - 1;
    while (left < right) {
        if (str[left++] != str[right--]) return false;
    }
    return true;
  }

  const getPartitions = (str, ans) => {
    if (str == '') {
        result.push(ans);
        return;
    }
    for (let i = 1; i <= str.length; i++) {
        const word = str.substring(0, i);
        if (isPalindrome(word)) {
            getPartitions(str.substring(i), [...ans, word]);
        }
    }
  }
  
  getPartitions(s, []);
  return result;
}

// Build a Diction from the last to first index.
var partition = function(s) {
  if (s.length == 1) return [[s]];
  const dict = {};

  const isPalindrome = (str) => {
    let left = 0, right = str.length - 1;
    while (left < right) {
        if (str[left++] != str[right--]) return false;
    }
    return true;
  }

  const buildPartitions = (str, ans, res) => {
      if (str == '') {
          res.push(ans);
          return;
      }
      for (let i = 1; i <= str.length; i++) {
          const word = str.substring(0, i);
          if (isPalindrome(word)) {
              const rest = str.substring(i);
              if (dict[rest]) {
                  for (let arr of dict[rest]) {
                      res.push([...ans, word, ...arr]);
                  }
              } else buildPartitions(str.substring(i), [...ans, word], res);
          }
      }
  }
  
  for (let i = s.length - 1; i >= 0; i--) {
      const res = []
      buildPartitions(s.substring(i), [], res);
      dict[s.substring(i)] = res;
  }
  
  return dict[s];
}

// Using Index instead of using SubString.
var partition = function(s) {
  if (s.length == 1) return [[s]];
  const dict = {};
  
  const isPalindrome = (left, right) => {
      while (left < right) {
          if (s[left++] != s[right--]) return false;
      }
      return true;
  }

  const getPartitions = (n, ans, result) => {
      if (n >= s.length) {
          result.push(ans);
          return;
      }
      for (let i = n; i < s.length; i++) {
          if (isPalindrome(n, i)) {
              if (dict[s.substring(i+1)]) {
                  for (let arr of dict[s.substring(i+1)]) {
                      result.push([...ans, s.substring(n, i+1), ...arr])
                  }
              } else getPartitions(i+1, [...ans, s.substring(n, i+1)], result);
          }
      }
  }

  for (let i = s.length - 1; i >= 0; i--) {
      const result = []
      getPartitions(i, [], result);
      dict[s.substring(i)] = result;
  }
  
  return dict[s];
}