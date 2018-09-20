let arr = [4, 15, 6, 3, 13, 4, 7, 14, 8, 15, 5, 8];
// for (let i=0; i<20; i++) {
//   arr = arr.concat(arr);
// }
console.log(tasksScheduling(11, arr))

function tasksScheduling(workingHours, tasks) {
  if (tasks.length === 0) return 0;
  tasks.sort((a, b) => b - a);
  if (tasks[0] > workingHours) return -1;
  let workDays = 0;
  let estimate = 0;
  let idx = 0;
  while (tasks.length > 0) {
    if (estimate+tasks[idx] === workingHours || idx === tasks.length-1) {
      workDays ++;
      tasks.splice(idx,1);
      idx = 0;
      estimate = 0;
    } else if (estimate+tasks[idx] > workingHours) {
      idx ++;
    } else if (estimate+tasks[idx]+tasks[tasks.length-1] === workingHours) {
      workDays ++;
      tasks.pop();
      tasks.splice(idx, 1);
      idx = 0;
      estimate = 0;
    } else if (estimate+tasks[idx]+tasks[tasks.length-1] < workingHours) {
      estimate += tasks[idx];
      tasks.splice(idx, 1);
    } else {
      idx ++;
    }
  }
  return workDays;
}
