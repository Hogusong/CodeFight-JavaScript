/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  const len = prerequisites.length;
  const prereq = {}, visited = new Set(), courses = new Set();
  for (let i = 0; i < numCourses; i++) prereq[i] = [];
  for (let arr of prerequisites) prereq[arr[0]].push(arr[1]);
  
  const dfs = (crs) => {
      if (visited.has(crs)) return false;
      if (courses.has(crs)) return true;
      visited.add(crs);
      for (let cs of prereq[crs]) {
          if (!dfs(cs)) return false;
      }
      visited.delete(crs);
      courses.add(crs);
      return true;
  }
  
  for (let i = 0; i < numCourses; i++) {
      if (!dfs(i)) return [];
  }
  return Array.from(courses);
};