/**
 * @param {number} n
 * @return {string}
 */
 var countAndSay = function(n) {
  let ans = "1";
  for (let i = 1; i < n; i++) {
      let temp = "";
      let prev = ans[0], count = 1;
      for (let j = 1; j < ans.length; j++) {
          if (ans[j] == prev) count++;
          else {
              temp = temp + count + prev;
              prev = ans[j];
              count = 1;
          }
      }
      ans = temp + count + prev;
  }
  return ans;
};