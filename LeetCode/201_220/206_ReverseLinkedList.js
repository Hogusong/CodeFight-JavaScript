/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head || !head.next) return head;
    const root = new ListNode(0, head);
    let curr = head;
    while (curr.next) {
        const temp = root.next;
        root.next = curr.next;
        curr.next = curr.next.next;
        root.next.next = temp;
    }
    return root.next;
};