/**
 * @param {string} s
 * @return {string}
 */
 var removeDuplicateLetters = function(s) {
  const dict = {};
  for (let c of s) {
      if (!dict[c]) dict[c] = 1;
      else dict[c]++;
  }
  
  let str = [];
  for (let i = 0; i < s.length; i++) {
      dict[s[i]]--;
      if (str.includes(s[i])) continue;
      while (str.at(-1) > s[i] && dict[str.at(-1)] > 0) str.pop()
      str.push(s[i]);
  }
  return str.join('');
};