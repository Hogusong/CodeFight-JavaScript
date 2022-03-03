/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
 var compareVersion = function(version1, version2) {
  const v1 = version1.split('.');
  const v2 = version2.split('.');
  let i = 0, ans = 0;
  while (true) {
      if (i >= v1.length && i >= v2.length) break;
      if (i < v1.length && i < v2.length) {
          ans = compare(+v1[i], +v2[i]);
      } else if (i >= v1.length) {
          ans = compare(0, +v2[i]);
      } else if (i >= v2.length) {
          ans = compare(+v1[i], 0);
      } 
      if (ans != 0) return ans
      i++;
  }
  return 0
}

function compare(a, b) {
  console.log([a, b])
  if (a == b) return 0;
  if (a > b) return 1;
  return -1;
}

var compareVersion = function(version1, version2) {
  const ver1 = version1.split('.');
  const ver2 = version2.split('.');
  const n1 = ver1.length, n2 = ver2.length;
  let i = 0;
  while (i < n1 && i < n2) {
      if (+ver1[i] > +ver2[i]) return 1;
      if (+ver1[i] < +ver2[i]) return -1;
      i++;
  }
  if (i < n1)  return getValue(ver1, i) > 0 ? 1 : 0;
  return getValue(ver2, i) > 0 ? -1 : 0;        
};

function getValue(arr, i) {
  for (i; i < arr.length; i++) {
      if (+arr[i] > 0) return +arr[i];
  }
  return 0;
}