/**
 * @param {number[][]} points
 * @return {number}
 */
 var maxPoints = function(points) {
  if (points.length < 3) return points.length;
  const dict = {};
  
  const buildDict = n => {
      for (let i = n + 1; i < points.length; i++) {
          const key = generateKey(points[n], points[i])
          if (!dict[key]) dict[key] = [points[n], points[i]];
          else {
              const p = points[i]
              const index = dict[key].findIndex(arr => arr[0] == p[0] && arr[1] == p[1]);
              if (index < 0) dict[key].push(p);
          }
      }    
  }
  
  for (let i = 0; i < points.length - 1; i++) {
      buildDict(i)
  }
  
  let maxC = 0;
  for (let key in dict) maxC = Math.max(maxC, dict[key].length);
  return maxC;
}

function generateKey(a, b) {
  if (a[0] == b[0]) return 'x = ' + a[0];
  if (a[1] == b[1]) return 'y = ' + a[1];
  const [x1, y1] = a, [x2, y2] = b;
  const s = (y2 - y1) / (x2 - x1);
  const z = y1 - (x1 * s);
  return s + ':' + z;    
}

var maxPoints = function(points) {
  if (points.length < 3) return points.length;
  let maxP = 0;
  
  const buildDict = (n, dict) => {
      for (let i = n + 1; i < points.length; i++) {
          const key = generateKey(points[n], points[i])
          if (!dict[key]) dict[key] = 2;
          else dict[key]++;
      }
      for (let key in dict) maxP = Math.max(maxP, dict[key]);
  }
  
  for (let i = 0; i < points.length - 1; i++) buildDict(i, {})
  
  return maxP;
}

var maxPoints = function(points) {
  if (points.length < 3) return points.length;
  let maxP = 0;
  for (let n = 0; n < points.length - 1; n++) {
      const dict = {};
      for (let i = n + 1; i < points.length; i++) {
          const key = generateKey(points[n], points[i])
          if (!dict[key]) dict[key] = 2;
          else dict[key]++;
      }
      for (let key in dict) maxP = Math.max(maxP, dict[key]);
  }

  return maxP;
}