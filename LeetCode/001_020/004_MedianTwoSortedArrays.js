/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(A, B) {
  if (A.length > B.length) [A, B] = [B, A];
  const totLen = A.length + B.length;
  const half = Math.floor(totLen / 2);
  let l = 0, r = A.length - 1;
  while (true) {
      const i = Math.floor((l + r) / 2); // for A
      const j = half - i - 2;  // for B
      const Aleft = i >= 0 ? A[i] : -Number.MAX_VALUE;
      const Aright = i + 1 < A.length ? A[i + 1] : Number.MAX_VALUE;
      const Bleft = j >= 0 ? B[j] : -Number.MAX_VALUE;
      const Bright = j + 1 < B.length ? B[j + 1] : Number.MAX_VALUE;
      
      if (Aleft <= Bright && Bleft <= Aright) {
          if (totLen % 2) return Math.min(Aright, Bright);
          else return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
      } else if (Aleft > Bright) r = i - 1;
      else l = i + 1;
  }
};

var findMedianSortedArrays2 = function(A, B) {
  const m = A.length;
  const n = B.length;
  const mid = Math.floor(m + n) / 2;
  const isEven = (m + n) % 2 == 0;
  let i = 0, j = 0, count = 0, prev = null, curr = null;
  while (count <= mid) {
      prev = curr;
      if (i >= m) curr = B[j++];
      else if (j >= n) curr = A[i++];
      else curr = A[i] >= B[j] ? B[j++] : A[i++];
      count++;
  }
  if (isEven) return (prev + curr) / 2;
  return curr;
};
