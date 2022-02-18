/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let currA = headA, currB = headB, count = 0;
  while (true) {
      if (currA == currB) return currA;
      currA = currA.next;
      currB = currB.next;
      if (!currA) {
          currA = headB;
          count++;
      }
      if (!currB) {
          currB = headA;
          count++;
      }
      if (count > 2) break;
  }
  return null;
};

var getIntersectionNode = function(headA, headB) {
  let currA = headA, currB = headB;
  while (currA != currB) {
      if (currA) currA = currA.next;
      else currA = headB;
      if (currB) currB = currB.next;
      else currB = headA;
  }
  return currA;
};