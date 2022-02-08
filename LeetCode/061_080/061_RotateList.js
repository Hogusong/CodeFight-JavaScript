/*
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var rotateRight = function(head, k) {
  if (!head || !head.next) return head;
  let n = 0;
  let curr = head;
  while (curr) {
      n++;
      curr = curr.next;
  }
  k = k % n;
  if (k < 1) return head;
  let kthNode = head;
  while (k > 0) {
      kthNode = kthNode.next;
      k--;
  }
  curr = head;
  while (kthNode.next) {
      curr = curr.next;
      kthNode = kthNode.next;
  }
  const node = curr.next;
  curr.next = null
  kthNode.next = head;
  return node;
};