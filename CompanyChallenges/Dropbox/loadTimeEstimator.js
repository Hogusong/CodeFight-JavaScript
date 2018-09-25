const Task = function(index, size, start) {
  this.size = size;
  this.start = start;
  this.end = 0;
  this.index = index;
}

function loadTimeEstimator(sizes, uploadingStart, v) {
  if (sizes.length < 1) return [];
  const tasks = [];
  for (let i=0; i < sizes.length; i++) {
    tasks.push(new Task(i, sizes[i], uploadingStart[i]));
  }
  tasks.sort((a,b) => b.start - a.start)
  const doneTasks = []
  const running = []
  let time = tasks[tasks.length-1].start
  let count = 0
  while (tasks.length > 0 || running.length > 0) {
    while (tasks.length > 0 && tasks[tasks.length-1].start === time) {
      running.push(tasks.pop());
    }
    if (running.length > 0) {
      let remainedTime = 1;
      let loadForEach = v/running.length;   
      running.sort((a,b) => b.size - a.size);
      while (remainedTime > 0.0001 && running.length > 0) {
        if (running[running.length-1].size <= loadForEach) {
          const upload = running[running.length-1].size;
          remainedTime -= upload / loadForEach;
          running.forEach(task => {
            task.size -= upload;
            task.size = parseFloat(task.size.toFixed(4));
          });
          while (running.length > 0 && running[running.length-1].size < 0.0001 ) {
            const task = running.pop();
            task.end = time + 1
            doneTasks.push(task);
          }
          loadForEach = remainedTime * v / running.length;
        } else {
          running.forEach(task => {
            task.size -= loadForEach;
            task.size = parseFloat(task.size.toFixed(4));
          });
          remainedTime = 0
        }
      }
    }
    time ++;
  }
  doneTasks.sort((a,b) => a.index - b.index);
  return doneTasks.map(task => task.end)
}

/*
const Task = function(index, size, start) {
  this.size = size;
  this.start = start;
  this.remain = size;
  this.estimate = 0;
  this.usedTime = 0;
  this.curSpeed = 0; 
  this.gapTime = 0;
  this.index = index;

  this.setGapTime = function(time) {
    this.gapTime = time;
  }

  this.updateEstimate = function(speed) {
    this.curSpeed = speed;
    this.estimate = this.remain/speed;
  }

  this.updateUpload = function(time) {
    this.remain -= this.curSpeed*time;
    this.estimate -= time;
    this.usedTime += time;
    this.gapTime -= (this.estimate > 0.001)? time : 
                    this.gapTime;
  }

  this.clearGap = function(speed) {
    this.curSpeed = speed;
    this.remain -= this.curSpeed * this.gapTime;
    this.estimate -= this.gapTime;
    this.usedTime += this.gapTime;
    this.gapTime = 0
  }

  this.resetSpeed = function (speed) {
    this.estimate = this.remain/speed;
    this.curSpeed = speed;
  }
}

function loadTimeEstimator(sizes, uploadingStart, v) {
  var len = sizes.length
  const tasks = [];
  const interval = [];
  const allInfo = [];
  for (let i=0; i < len; i++) {
    allInfo.push([i, sizes[i], uploadingStart[i]]);
  }
  allInfo.sort((a,b) => a[2] - b[2])
  for (let i=0; i < len; i++) {
    const gap = (i===0)? 0 : allInfo[i][2] - allInfo[i-1][2] ;
    interval.push(gap);
    tasks.push(new Task(allInfo[i][0], allInfo[i][1], allInfo[i][2]))
  }
  var count, index;
  let k = 1;
  while (isAnyRemained()) {
    [count, index]= setGapTime();
    if (index > 0) {
      for (let i=0; i<index; i++) {
        if (tasks[i].gapTime > 0.0001) tasks[i].updateEstimate(v/count)
      }
      uploading(index, interval[index]);
      clearGapTime(index)
      interval[index] = 0
    } else {
      break
    }
  }

  uploadRest(len)

  function setGapTime() {
    let index = -1;
    let count = 0
    for (let i=0; i<len; i++) {
      if (interval[i] > 0) {
        index = i
        break;
      } 
    }
    for (let i=0; i<index; i++) {
      if (tasks[i].remain > 0.0001) {
        tasks[i].setGapTime(interval[index]);
        count ++;
      }
    }
    return [count, index];
  }

  function uploading(index, gapTimeRemained) {
    let min_estimate = 100000000000000
    for (let i=0; i<index; i++) {
      if( tasks[i].estimate > 0.0001 && tasks[i].estimate < min_estimate) {
        min_estimate = tasks[i].estimate;
      }
    }
    if (min_estimate <= gapTimeRemained) {
      let count = 0
      for (let i=0; i<index; i++) {
        if (tasks[i].estimate > 0.0001) {
          tasks[i].updateUpload(min_estimate);
          if (tasks[i].remain > 0.0001) count ++;
        }
      }
      if (count > 0) resetSpeed(index, count);
      gapTimeRemained -= min_estimate;
      if (gapTimeRemained > 0.0001) uploading(index, gapTimeRemained)  
    } 
    return
  }

  function resetSpeed(index, count) {
    for (let i=0; i<index; i++) {
      if (tasks[i].estimate > 0.0001) tasks[i].resetSpeed(v/count)
    }
  }

  function uploadRest(len) {
    while (isAnyRemained()) {
      let min_estimate = 100000000
      let count = 0
      for (let i=0; i<len; i++) {
        if( tasks[i].remain > 0.0001) {
          count ++;
        }
      }

      for (let i=0; i<len; i++) {
        if( tasks[i].remain > 0.0001) {
          tasks[i].updateEstimate(v/count);
          if (min_estimate > tasks[i].estimate) min_estimate = tasks[i].estimate;
        }
      }
      for (let i=0; i<len; i++) {
        if (tasks[i].remain > 0.0001) {
          tasks[i].resetSpeed(v/count)
          tasks[i].updateUpload(min_estimate);
        }
      }
    }
    return
  }

  function clearGapTime(index) {
    let count = 0;
    for (let i=0; i<index; i++) {
      if (tasks[i].gapTime > 0.0001) count ++
    }
    for (let i=0; i<index; i++) {
      if (tasks[i].gapTime > 0.0001) tasks[i].clearGap(v/count)
    }
  }

  function isAnyRemained() {
    for (let i=0; i<tasks.length; i++) {
      if (tasks[i].remain > 0.0001) return true;
    }
    return false;
  }

  const result = [];
  tasks.forEach(task => {
    let usedTime = task.start + task.usedTime;
    usedTime = (usedTime === Math.round(usedTime)) ? usedTime : Math.floor(usedTime) + 1;
    result[task.index] = usedTime;
  })
  return result;
}
*/

let sizes = [14, 8, 25, 20];
let uploadingStart = [3, 2, 10, 6];
let v = 7
sizes = [12, 17, 9, 27, 23]
uploadingStart = [12, 2, 7, 2, 20]
v = 5
console.log(loadTimeEstimator(sizes, uploadingStart, v))

//  [6, 4, 14, 9]
//  [15, 10, 12, 14, 25]
