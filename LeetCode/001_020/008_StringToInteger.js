/**
 * @param {string} str
 * @return {number}
 */
 var myAtoi = function(str) {
  let i = 0, ans = 0, prefix = 1;
  const nums = "0123456789";
  while (str[i] == " ") i++;
  if (str[i] == '+' || str[i] == '-') {
      if (str[i] == '-') prefix = -1
      i++;
  }
  while (i < str.length && nums.includes(str[i])) {
      ans = ans * 10 + parseInt(str[i++]);
  }
  ans = ans * prefix;
  if (ans < -(2**31)) return -(2**31)
  if (ans > 2**31-1) return 2**31-1;
  return ans;
};