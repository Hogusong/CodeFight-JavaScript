/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
  let maxP = 0;
  for (let i = 0; i < words.length; i++) {
      for (let j = i + 1; j < words.length; j++) {
          let shared = false;
          for (let c of words[i]) {
              if (words[j].includes(c)) {
                  shared = true;
                  break
              }
          }
          if (!shared) maxP = Math.max(maxP, words[i].length * words[j].length)
      }
  }
  return maxP;
};

// A little faster than the above solution but using more memory.
var maxProduct = function(words) {
  let maxP = 0, dict = {};
  for (let word of words) {
      dict[word] = new Set();
      for (let c of word) dict[word].add(c);
  }
  
  for (let i = 0; i < words.length; i++) {
      for (let j = i + 1; j < words.length; j++) {
          let shared = false;
          for (let c of dict[words[i]]) {
              if (dict[words[j]].has(c)) {
                  shared = true;
                  break
              }
          }
          if (!shared) maxP = Math.max(maxP, words[i].length * words[j].length)
      }
  }
  return maxP;
};