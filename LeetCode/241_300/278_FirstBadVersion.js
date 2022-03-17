/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
      if (n == 1) return isBadVersion(n) ? n : -1
      let s = 1, e = n;
      while (s < e) {
          const mid = Math.floor((s + e) / 2);
          if (mid > 1 && isBadVersion(mid) && !isBadVersion(mid-1)) return mid;
          if (!isBadVersion(mid) && isBadVersion(mid+1)) return mid + 1;
          if (isBadVersion(mid) && isBadVersion(mid+1)) e = mid-1;
          else s = mid+1;
      }
      return s;
  };
};