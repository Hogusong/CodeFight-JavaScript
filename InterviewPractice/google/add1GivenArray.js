function addNumber(L, number) {
  if (L.length < 1) {
    L[0] = number;
    return L;
  }
  const sum = L[L.length-1] + number;
  if (sum < 10) {
    L[L.length-1] = sum;
  } else {
    L[L.length-1] = sum - 10;
    // L = addOne(L.slice(), L.length-2);
    L = addOneLoop(L.slice(), L.length-2);
  }
  return L;
}

function addOne(L, index) {
  if (index < 0) {
    L = [1, ...L];
  } else if (L[index] < 9) {
    L[index]++;
  } else {
    L[index] = 0
    L = addOne(L, index-1);
  }
  return L;
}

function addOneLoop(L, index) {
  for (let i=index; i>=0; i--) {
    const sum = L[i] + 1;
    if (sum < 10) {
      L[i] = sum;
      break;
    } else {
      L[i] = sum - 10;
      if (i === 0) {
        L = [1, ...L];
      }
    }
  }
  return L;
}

L = [9,9,9,8]
console.log(L);
console.log(addNumber(L.slice(), 6));
