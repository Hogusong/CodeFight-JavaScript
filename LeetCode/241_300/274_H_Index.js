/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  const len = citations.length;
  citations.sort((a, b) => a - b);
  let l = 0, r = len -1
  while (l <= r) {
      const mid = Math.floor((r + l) / 2);
      if (citations[mid] == len - mid) return citations[mid];
      if (citations[mid] > len - mid) r = mid - 1;
      else l = mid + 1;
  }
  return len - l
};