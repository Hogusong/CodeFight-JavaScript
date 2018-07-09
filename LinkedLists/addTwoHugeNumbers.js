// Definition for singly-linked list:
function ListNode(x) {
  this.value = x;
  this.next = null;
}

// function addTwoHugeNumbers(a, b) {
//   const listA = getList(a)
//   const listB = getList(b)

  // let ans = ''
  // let sum, x, y, z = 0;
  // while (listA.length > 0 || listB.length > 0) {
  //   x = (listA.length>0) ? listA.pop() : 0;
  //   y = (listB.length>0) ? listB.pop() : 0; 
  //   sum = x + y + z
  //   z = 0
  //   if (sum > 9999) {
  //     sum = sum - 10000;
  //     z = 1
  //   }
  //   ans = sum + ',' + ans
  // }
  // if (z > 0) ans = '1,' + ans;
  // let list = ans.split(',')
  // list.pop()
  // for (let i=0; i<list.length; i++) {
  //   list[i] = parseInt(list[i],10)
  // }
  // return list
// }

function addTwoHugeNumbers(a, b) {
  const listA = getList(a)
  const listB = getList(b)

  let ans = []
  let sum, x, y, z = 0;
  while (listA.length > 0 || listB.length > 0) {
    x = (listA.length>0) ? listA.pop() : 0;
    y = (listB.length>0) ? listB.pop() : 0; 
    sum = x + y + z
    z = 0
    if (sum > 9999) {
      sum = sum - 10000;
      z = 1
    }
    ans.push(sum)
  }
  if (z > 0) ans.push(1);
  return ans.reverse()
}

function getList(root) {
  const list = [root.value];
  let current = root.next;
  while (current) {
    list.push(current.value);
    current = current.next;
  }
  return list;
}
