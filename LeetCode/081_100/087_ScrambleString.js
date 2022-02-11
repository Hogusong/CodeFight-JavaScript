/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var isScramble = function(s1, s2) {
  if (s1.length != s2.length) return false;
    if (s1 === s2) return true
    if (!isAnagram(s1, s2)) return false;
  
    return checkRec(s1, s2);
  }
  
  function checkRec(s1, s2) {
    if (s1 === s2) return true;
    if (s1.length != s2.length) return false;
    let scramble = false;
    const len = s1.length;
    for (let i = 1; i < len; i++) {
      scramble = scramble || (checkRec(s1.substring(0,i), s2.substring(0,i)) && 
                 checkRec(s1.substring(i,len), s2.substring(i, len))) || 
                 (checkRec(s1.substring(0,i), s2.substr(len-i, len)) &&
                 checkRec(s1.substring(i, len), s2.substring(0, len-i))) 
      if (scramble) return true;
    }
    return scramble;
  }
  
  function isAnagram(s1, s2) {
    for (let i = 0; i <s1.length; i++) if (!s2.includes(s1[i])) return false;
    return true;
  }  
  