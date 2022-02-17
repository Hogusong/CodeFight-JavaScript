/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var sortList = function(head) {
  if (!head || !head.next) return head;
  let slow = head, fast = head.next;
  while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
  }
  const node = slow.next;
  slow.next = null;
  const left = sortList(head);
  const right = sortList(node);
  return mergeLists(left, right);
}

function mergeLists(a, b) {
  const root = new ListNode(0);
  let curr = root;
  while (a && b) {
      if (a.val > b.val) {
          curr.next = b;
          b = b.next;
      } else {
          curr.next = a;
          a = a.next;
      }
      curr = curr.next;
  }
  curr.next = a ? a : b;
  return root.next;
}
