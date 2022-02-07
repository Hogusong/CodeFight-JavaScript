/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
  let prefix = strs[0];
  let len = prefix.length;
  for (let str of strs) {
      if (str.length == 0) return '';
      for (let i = 0; i < len; i++) {
          if (prefix[i] != str[i] || i >= str.length) {
              len = i;
              break;
          }
      }
  }
  return prefix.substring(0, len);
}