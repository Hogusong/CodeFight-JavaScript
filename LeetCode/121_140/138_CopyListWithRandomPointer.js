/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if (!head) return null;
  let p = head;
  while (p) {
    const temp = new Node(p.val);
    temp.next = p.next;
    p.next = temp;
    p = temp.next;
  }

  p = head;
  while (p) {
    if (p.random) p.next.random = p.random.next;
    p = p.next.next;
  }
  p = head;
  let newHead = head.next;
  while (p) {
    const temp = p.next;
    p.next = temp.next;
    if (temp.next) temp.next = temp.next.next;
    p = p.next;
  }
  return newHead;
};

// Using WeakMap to use an Object as a key of MAP.
var copyRandomList = function(head) {
  const wMap = new WeakMap();
  
  const deepCopy = (node) => {
      if (!node) return null;
      let newNode = new Node(node.val, null, null);
      if (!wMap.get(node)) wMap.set(node, newNode);
      if (node.next) {
          if (wMap.get(node.next)) newNode.next = wMap.get(node.next);
          else newNode.next = deepCopy(node.next);
      }
      if (node.random) {
          if (wMap.get(node.random)) newNode.random = wMap.get(node.random);
          else newNode.random = deepCopy(node.random);
      }
      return newNode;
  };
  return deepCopy(head);
}
