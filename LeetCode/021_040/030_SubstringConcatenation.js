/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
 var findSubstring = function(s, words) {
  const wLen = words.length;
  const len = words[0].length;
  const ans = [];
  if (s.length < wLen * len) return ans;

  const dict = {};
  for (let w of words) {
      if (!dict[w]) dict[w] = 1;
      else dict[w]++;
  }
  
  for (let i = 0; i <= s.length - (wLen * len); i++) {
      const word = s.substr(i, len);
      if (dict[word] && confirm(s, i, len, wLen, Object.assign({}, dict))) ans.push(i);
  }
  return ans;
}

function confirm(s, i, len, wLen, dict) {
  while (wLen > 0) {
      const word = s.substr(i, len);
      if (!dict[word]) return false;
      dict[word]--;
      i += len;
      wLen--;
  }
  return true;
}
