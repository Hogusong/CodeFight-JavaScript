/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const result = [];
  const arr = [];
  for (let i = 0; i < k; i++) arr.push(i+1);
  
  while (arr[k-1] <= n) {
    result.push([...arr]);
    let t = k - 1;
    while (t > 0 && arr[t] === n - k + t + 1) {
      t--;
    }
    arr[t]++;
    for (let i = t + 1; i < k; i++) {
      arr[i] = arr[i-1] + 1;
    }
  }
  return result;
}

// Using Recursion.
var combine = function(n, k) {
  let result = [];
  const helper = (i, arr) => {
      if (arr.length == k) {
          result.push(arr);
          return;
      }
      if (i > n) return;
      helper(i+1, arr);
      helper(i+1, [...arr, i]);
  }
  helper(1, []);
  return result;
}
