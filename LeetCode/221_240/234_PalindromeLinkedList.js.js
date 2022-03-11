/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
  if (!head.next) return true;
  if (!head.next.next) return head.val === head.next.val;
  let curr = head, fast = head.next, prev = null;
  while (fast && fast.next) {
      curr = curr.next;
      fast = fast.next.next;
  }
  prev = curr;
  curr = prev.next;
  while (curr && curr.next) {
      const temp = prev.next;
      prev.next = curr.next;
      curr.next = curr.next.next;
      prev.next.next = temp;
  }
  curr = prev.next;
  while (curr) {
      if (head.val !== curr.val) return false;
      head = head.next;
      curr = curr.next;
  }
  return true;
};