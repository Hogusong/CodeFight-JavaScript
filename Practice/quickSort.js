console.time("Time to initalize ");
let L_origin = []
let range = 1000000 + Math.floor(Math.random()*10000);
for (let i=0; i<range; i++) {
  const count = Math.floor(Math.random() * 19);
  let e = Math.floor(Math.random() * 12345) + count;
  L_origin.push(e);
}
let testL = [3,9,5,2,5,6,1,0,3];
console.timeEnd("Time to initalize ");
console.log('Array.length is ' + range + '\n');

function mergeSort(L) {
  if (L.length < 2) return L;
  const half = Math.floor(L.length/2);
  const front = mergeSort(L.slice(0,half));
  const back = mergeSort(L.slice(half));
  [i,j] = [0,0]
  const result = []
  while (front.length > i && back.length > j) {
    if (front[i] > back[j]) result.push(back[j++]) ; 
    else result.push(front[i++])
  }
  if ( i === front.length) return result.concat(back.slice(j));
  return result.concat(front.slice(i));
}

console.time('Time for merge Sort ')
result = mergeSort(L_origin.slice());
// result = mergeSort(testL.slice());
// console.log(result, count);
console.timeEnd('Time for merge Sort ')
console.log()

function quickSortMine(L, first, last) {
  if (first < last) {
    const mid = patitionMine(L, first, last);
    quickSortMine(L, first, mid-1);
    quickSortMine(L, mid+1, last);
  }
}

function patitionMine(L, first, last) {
  let mid = Math.floor((first + last) / 2);
  const pivot = L[mid];
  let index = first;
  while (index < mid) {
    if (L[index] > pivot) {
      L[mid] = L[index];
      L[index] = L[mid-1];
      L[mid-1] = pivot;
      mid--;
    } else {
      index++;
    }
  }
  index = last;
  while (mid < index) {
    if (L[index] < pivot) {
      L[mid] = L[index];
      L[index] = L[mid+1];
      L[mid+1] = pivot;
      mid++;
    } else {
      index--;
    }
  }
  return mid;
}

function quickSortMIT(L, first, last) {
  if (first < last) {
    const mid = patitionMIT(L, first, last);
    quickSortMIT(L, first, mid-1);
    quickSortMIT(L, mid+1, last);
  }
}

function patitionMIT(L, first, last) {
  let l_r = first + 1;
  let r_l = last;
  let pivot = L[first]
  let done = false;
  while (!done) {
    while (l_r <= r_l && L[l_r] <= pivot) {
      l_r ++;
    }

    while (l_r <= r_l && L[r_l] >= pivot) {
      r_l --;
    }

    if (l_r <= r_l) {
      [L[l_r], L[r_l]] = [L[r_l], L[l_r]]
    } else {
      done = true;
    }
  }
  [L[first], L[r_l]] = [L[r_l], L[first]];
  return r_l
}

const quickSortWeb = (
  unsortedArray,
  comparator = defaultComparator
) => {

  // Create a sortable array to return.
  const sortedArray = [...unsortedArray];

  // Recursively sort sub-arrays.
  const recursiveSort = (start, end) => {

    // If this sub-array is empty, it's sorted.
    if (end - start < 1) {
      return;
    }
    const pivotValue = sortedArray[end];
    let splitIndex = start;
  };

  // Sort the entire array.
  recursiveSort(0, unsortedArray.length - 1);
  return sortedArray;
};

L2 = L_origin.slice();
console.time('Time for MIT quick Sort ')
quickSortMIT(L2, 0, L2.length-1);
console.timeEnd('Time for MIT quick Sort ')
console.log(isSame(L2, result));

L3 = L_origin.slice();
console.time('Time for Web quick Sort ')
quickSortMIT(L3, 0, L3.length-1);
console.timeEnd('Time for Web quick Sort ')
console.log(isSame(L3, result));

L1 = L_origin.slice();
console.time('Time for my quick Sort ')
quickSortMine(L1, 0, L1.length-1);
console.timeEnd('Time for my quick Sort ')
console.log(isSame(L1, result));

L4 = L_origin.slice();
console.time('Time for Javascript Sort ')
L4 = L_origin.sort((a,b) => a-b);
console.timeEnd('Time for Javascript Sort ')
console.log(isSame(L4, result));

function isSame(arr1, arr2) {
  if (arr1.length != arr2.length) return false;
  for (let i=0; i<arr1.length; i++) {
    if (arr1[i] != arr2[i]) return false;
  }
  return true;
}
