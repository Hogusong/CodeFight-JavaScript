/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
  if (needle.length > haystack.length) return -1;
  if (needle.length < 1 || haystack == needle) return 0;
  for (let i = 0; i < haystack.length; i++) {
      if (haystack[i] == needle[0]) {
          if (haystack.substr(i, needle.length) == needle) return i;
      }
  }
  return -1;
};        
