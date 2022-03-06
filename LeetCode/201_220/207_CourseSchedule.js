/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 var canFinish = function(numCourses, prerequisites) {
  const dict = {};
  for (let i = 0; i < numCourses; i++) dict[i] = [];

  for (let arr of prerequisites) {
      dict[arr[0]].push(arr[1]);
  }
  // for (let [crs, pre] of prerequisites) {
  //   dict[crs].push(pre);
  // }  
  
  const visited = new Set();
  
  const dfs = (crs) => {
      if (visited.has(crs)) return false;
      if (dict[crs].length < 1) return true;
      visited.add(crs);
      for (let pre of dict[crs]) {
          if (!dfs(pre)) return false;
      }
      visited.delete(crs);
      // If any prerequisite is looping, false was returned in line 24.
      dict[crs] = [];   
      // Solution is OKAY without executing line 28 but it takes more time.
      return true;
  }
  
  for (let i = 0; i < numCourses; i++) {
      if (!dfs(i)) return false
  }
  return true;
};