/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
  const romans = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
  let num = 0;
  for (let i = 0; i < s.length; i++) {
      if (i < s.length - 1 && romans[s[i]] < romans[s[i+1]]) num -= romans[s[i]];
      else num += romans[s[i]];
  }
  return num;
};

// Using arrays instead of a dictionary.
var romanToInt = function(s) {
  const N = [1000, 500, 100, 50, 10, 5, 1];
  const R = 'MDCLXVI';
  const temp = [];
  for (let i = 0; i < s.length; i++) {
    const index = R.indexOf(s[i]);
    if (index >= 0) temp.push(index);
  }
  let num = 0;
  for (let i = 0; i < temp.length; i++) {
    if (i < temp.length - 1 && temp[i] > temp[i+1]) {
      num -= N[temp[i]];
    } else num += N[temp[i]];
  }
  return num;
};