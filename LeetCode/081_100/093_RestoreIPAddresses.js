/**
 * @param {string} s
 * @return {string[]}
 */
//---------- Using Recursion
var restoreIpAddresses = function(s) {
  const len = s.length;
  if (len < 4 || len > 12) return [];
  const result = [];
  
  const generateIPA = (n, ans) => {
    if (ans.length > 3) {
        if (n == len) result.push(ans.join('.'));
        return;
    }
    if (len - n > (4 - ans.length) * 3) return;
    generateIPA(n+1, [...ans, s[n]]);
    if (s[n] != '0') {
        generateIPA(n+2, [...ans, s.substring(n, n+2)])
        const str = s.substring(n, n+3);
        if (str.length > 2 && +str < 256) generateIPA(n+3, [...ans, str])
    }
  }
  
  generateIPA(0, [])
  return result;
}

// ----------- Using FOR LOOP
var restoreIpAddresses = function(s) {
  const size = s.length;
  if (size < 4 || size > 12) return [];

  let result = [], newStr = '';
  for (let i = 1; i <= 3; i++) {
    for (let j = i + 1; j <= i + 3 && j < size - 1; j++) {
      for (let k = j + 1; k <= j + 3 && k < size; k++) {
        newStr = s.substring(0, k) + '.' + s.substring(k);
        newStr = newStr.substring(0, j) + '.' + newStr.substring(j);
        newStr = newStr.substring(0, i) + '.' + newStr.substring(i);
        if (isValidAddress(newStr)) result.push(newStr);
      }
    }
  }
  return result;
}

function isValidAddress(str) {
  const S = str.split('.');
  for (let s of S) {
    if (s.length > 3 || +s > 255) return false;
    if (s.length > 1 && s[0] === '0') return false;
  }
  return true;
}