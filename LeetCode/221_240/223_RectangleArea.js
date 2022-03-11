/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
  const areaA = (ax2 - ax1) * (ay2 - ay1);
  const areaB = (bx2 - bx1) * (by2 - by1);
  let areaCommon = 0;
  if ((ax1 <= bx1 && bx1 <= ax2) || (ax1 <= bx2 && bx2 <= ax2) || (ax1 <= bx1 && bx2 <= ax2) || (bx1 <= ax1 && ax2 <= bx2)) {
      if ((ay1 <= by1 && by1 <= ay2) || (ay1 <= by2 && by2 <= ay2) || (ay1 <= by1 && by2 <= ay2) || (by1 <= ay1 && ay2 <= by2)) {
          const x1 = Math.max(ax1, bx1);
          const x2 = Math.min(ax2, bx2);
          const y1 = Math.max(ay1, by1);
          const y2 = Math.min(ay2, by2);
          areaCommon = (x2 - x1) * (y2 - y1);
      }
  }
  return areaA + areaB - areaCommon;
};