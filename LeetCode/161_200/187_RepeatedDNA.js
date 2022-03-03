/**
 * @param {string} s
 * @return {string[]}
 */

// Time Limit Exceeded.  30 / 31 test cases passed.
var findRepeatedDnaSequences = function(s) {
  const set = new Set();
  for (let i = 0; i < s.length - 10; i++) {
      const dna = s.substring(i, i+10);
      if (set.has(dna)) continue;
      for (let j = i+1; j < s.length; j++) {
          if (dna === s.substring(j, j + 10))  set.add(dna);
      }
  }
  return Array.from(set);
};