/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
// Using Stack 
var reorderList = function(head) {
  const stack = [];
  let slow = head, fast = head.next;
  while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
  }
  let curr = slow.next;
  console.log(slow.val)
  slow.next = null;
  while (curr) {
      stack.push(curr);
      curr = curr.next;
  }
  curr = head;
  while (stack.length > 0) {
      const temp = curr.next;
      curr.next = stack.pop();
      curr.next.next = temp;
      curr = temp;
  }
  return head;
};

// Using reverseList function.
var reorderList = function(head) {
  if (!head || !head.next) return head;
  let slow = head, fast = head.next;
  while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
  }
  let curr = slow.next;
  slow.next = null;
  let bCurr = reverseList(curr);
  curr = head;
  while (bCurr) {
      const temp = curr.next;
      curr.next = bCurr;
      bCurr = bCurr.next;
      curr.next.next = temp;
      curr = temp;
  }
  return head;
};

function reverseList(node) {
  const root = new ListNode(0);
  let prev = root, curr = node;
  prev.next = node;
  while (curr.next) {
      const temp = curr.next.next;
      curr.next.next = prev.next;
      prev.next = curr.next;
      curr.next = temp;
  }
  return root.next;
}

function printList(node) {
  const arr = []
  while (node) {
      arr.push(node.val);
      node = node.next;
  }
  console.log(arr.join('-'));
}
