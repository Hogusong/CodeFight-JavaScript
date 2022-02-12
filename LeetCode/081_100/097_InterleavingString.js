/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
// Time Limit Exceeded: 99/106 test cases passed.
var isInterleave = function(s1, s2, s3) {
  const l1 = s1.length, l2 = s2.length, l3 = s3.length;
  if (l1 + l2 != l3) return false;
  if (l1 < 1 && l2 < 1) return l3 < 1;
  if (s1[0] == s3[0] && s2[0] == s3[0]) 
      return isInterleave(s1.substring(1), s2, s3.substring(1)) ||
          isInterleave(s1, s2.substring(1), s3.substring(1));
  if (s1[0] == s3[0]) return isInterleave(s1.substring(1), s2, s3.substring(1));
  if (s2[0] == s3[0]) return isInterleave(s1, s2.substring(1), s3.substring(1));
  return false;
}

// Time Limit Exceeded: 105/106 test cases passed.
var isInterleave = function(s1, s2, s3) {
  const l1 = s1.length, l2 = s2.length, l3 = s3.length;
  if (l1 + l2 != l3) return false;
  if (l1 < 1 && l2 < 1) return l3 < 1;
  
  const checkInterleave = (i, j, k) => {
      if (k == l3) return true;
      if (s1[i] == s3[k] && s2[j] == s3[k]) 
          return checkInterleave(i+1, j, k+1) || checkInterleave(i, j+1, k+1);
      if (s1[i] == s3[k]) return checkInterleave(i+1, j, k+1);
      if (s2[j] == s3[k]) return checkInterleave(i, j+1, k+1);
      return false;
  }
  
  return checkInterleave(0, 0, 0);
}

// Using Dictionary for Dynamic Programming.
var isInterleave = function(s1, s2, s3) {
  const l1 = s1.length, l2 = s2.length, l3 = s3.length;
  if (l1 + l2 != l3) return false;
  if (l1 < 1 && l2 < 1) return l3 < 1;
  dict = {}
  const checkInterleave = (i, j, k) => {
      if (k == l3) return true;
      const key = i + ',' + j + ',' + k;
      if (dict.hasOwnProperty(key)) return dict[key];
      dict[key] = (s1[i] == s3[k] && checkInterleave(i+1, j, k+1)) || 
          (s2[j] == s3[k] && checkInterleave(i, j+1, k+1))
      return dict[key];
  }
  
  return checkInterleave(0, 0, 0);
}

// Using 2D Array for Dynamic Programming.
var isInterleave = function(s1, s2, s3) {
  const table = []
  for (let i of s1) table.push(Array(s2.length).fill(-1))

  const interTable = (i, j, k) => {
    if (i === s1.length) return s2.substr(j) === s3.substr(k)
    if (j === s2.length) return s1.substr(i) === s3.substr(k)
    if (table[i][j] >= 0) return table[i][j] === 1
  
    const ans =
      (s3[k] === s1[i] && interTable(i + 1, j, k + 1)) ||
      (s3[k] === s2[j] && interTable(i, j + 1, k + 1))
  
    table[i][j] = ans ? 1 : 0
    return table[i][j] === 1
  }
  
  return interTable(0, 0, 0)
}