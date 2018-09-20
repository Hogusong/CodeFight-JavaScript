// Definition for singly-linked list:
function ListNode(x) {
  this.value = x;
  this.next = null;
}

function addTwoHugeNumbers(a, b) {
  const L = []
  const A = getArr(a)
  const B = getArr(b)
  let over = 0
  while (A.length > 0 || B.length > 0) {
    const valueA = (A.length > 0) ? A.pop() : 0;
    const valueB = (B.length > 0) ? B.pop() : 0;
    let sum = valueA + valueB + over;
    [sum, over] = (sum > 9999) ? [sum-10000, 1] : [sum, 0];
    L.unshift(sum);
  }
  if (over) L.unshift(over)
  return L
}

function getArr(l) {
  const result = []
  let curr = l
  while (curr) {
    result.push(curr.value)
    curr = curr.next
  }
  return result
}
