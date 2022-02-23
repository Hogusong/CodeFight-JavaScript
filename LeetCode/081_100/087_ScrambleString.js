/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// Using only Recursion.  195 / 288 test cases passed.
var isScramble = function(s1, s2) {
  if (s1.length != s2.length) return false;
  return canScramble(s1, s2);
}  

function canScramble(s1, s2) {
  if (s1 == s2) return true;
  const len = s1.length;
  for (let i = 1; i < s1.length; i++) {
      const first = canScramble(s1.substring(0,i), s2.substring(0, i)) &&
            canScramble(s1.substring(i), s2.substring(i));
      const second = canScramble(s1.substring(0,i), s2.substring(len - i)) &&
            canScramble(s1.substring(i), s2.substring(0, len - i));
      if (first || second) return true;
  }
  return false;
}

// Using Dictionary for Dynamic Program.  276 / 288 test cases passed.
var isScramble = function(s1, s2) {
    if (s1.length != s2.length) return false;
    const dict = {};
    
    const canScramble = (s1, s2) => {
        if (s1 == s2) return true;
        const len = s1.length;
        for (let i = 1; i < s1.length; i++) {
            const key1 = s1.substring(0, i) + ':' + s2.substring(0, i);
            const key2 = s1.substring(i) + ':' + s2.substring(i)
            const key3 = s1.substring(0, i) + ':' + s2.substring(len - i);
            const key4 = s1.substring(i) + ':' + s2.substring(0, len - i);
            if (!dict.hasOwnProperty(key1)) dict[key1] = canScramble(s1.substring(0,i), s2.substring(0, i));
            if (!dict.hasOwnProperty(key2)) dict[key2] = canScramble(s1.substring(i), s2.substring(i));
            if (!dict.hasOwnProperty(key3)) dict[key3] = canScramble(s1.substring(0,i), s2.substring(len - i))
            if (!dict.hasOwnProperty(key4)) dict[key4] = canScramble(s1.substring(i), s2.substring(0, len - i));
            if ((dict[key1] && dict[key2]) || (dict[key3] && dict[key4])) return true;
        }
        return false;
    }
    return canScramble(s1, s2);
}  
