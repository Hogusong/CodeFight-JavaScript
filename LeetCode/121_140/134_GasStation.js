/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  let sIndex = 0, qty = 0, index = 0, running = true, count = 0;
  
  while (true) {
      count++;
      running = true;
      if (count > gas.length * 2) break;
      qty += gas[index] - cost[index];
      index++;
      if (index >= gas.length) index = 0
      if (qty < 0) {
          sIndex = index;
          running = false;
          qty = 0;
      }
      if (running && sIndex == index) return sIndex;
  }
  return -1;
};

var canCompleteCircuit = function(gas, cost) {
  let sumRemaining = 0;
  let total = 0; 
  let start = 0;
  for (let i = 0; i < gas.length; i++) {
    let remaining = gas[i] - cost[i];
    //if sum remaining of (i-1) >= 0, continue
    if (sumRemaining >= 0) {
      sumRemaining += remaining;
    //otherwise, reset start index to be current
    } else {
      sumRemaining = remaining;
      start = i;
    }
    total += remaining;
  }
  if (total >= 0) return start;
  else return -1;
};

var canCompleteCircuit = function(gas, cost) {
  let remain = 0;   // track current remaining
  let total = 0;    // track total remaining
  let start = 0;    // reset if remain < 0
  for (let i = 0; i < gas.length; i++) {
      const gap = gas[i] - cost[i];
      if (remain >= 0) {
          remain += gap;
      } else {
          remain = gap;
          start = i;
      }
      total += gap;
  }
  if (total >= 0) return start;
  return -1;
};