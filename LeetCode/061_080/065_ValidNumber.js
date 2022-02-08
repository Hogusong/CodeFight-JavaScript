/**
 * @param {string} s
 * @return {boolean}
 */
 var isNumber = function(s) {
  const nums = '0123456789';
  let hasNum = false, hasDot = false, hasE = false, hasOperator = false;
  for (let c of s) {
      if (nums.includes(c)) hasNum = true;
      else if (c == '+' || c == '-') {
          if (hasNum || hasOperator || hasDot) return false;
          hasOperator = true;
      } else if (c == '.') {
          if (hasE || hasDot) return false
          hasDot = true;
      } else if (c == 'e' || c == 'E') {
          if (!hasNum || hasE) return false;
          hasE = true
          hasNum = false;
          hasOperator = false;
          hasDot = false;
      } else return false;
  }
  return hasNum;
}

var isNumber2 = function(s) {
  s = s.trim()
  const nums = '1234567890'
  let [hasE, hasDot, hasNum] = [false, false, false]
  for (let i = 0; i < s.length; i++) {
      const c = s[i]
      if (nums.includes(c)) hasNum = true
      else if ('eE'.includes(c)) {
          if (hasE || !hasNum) return false
          hasE = true
          hasNum = false
      } else if (c === '.') {
          if (hasE || hasDot) return false
          hasDot = true
      } else if ('+-'.includes(c)) {
          if (i != 0 && !'eE'.includes(s[i - 1])) return false
      } else return false
  }
  return hasNum
};