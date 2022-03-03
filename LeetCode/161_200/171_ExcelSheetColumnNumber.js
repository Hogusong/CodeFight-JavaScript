/**
 * @param {string} columnTitle
 * @return {number}
 */
 var titleToNumber = function(columnTitle) {
  let n = 0;
  for (let c of columnTitle) {
      const x = c.charCodeAt(0) - 64;
      n = n * 26 + x;
  }
  return n;
};