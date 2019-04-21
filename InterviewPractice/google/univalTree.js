// A unival tree (which stands for “universal value”) is a tree where all nodes have the same value.
class Node {
  constructor(v, lNode=null, rNode=null) {
    this.value = v;
    this.left = lNode;
    this.right = rNode;
  }
  getValue() {  return this.value;  }
  setValue(v) {  this.value = v;  }
  getLeft() {  return this.left;  }
  getRight() {  return this.right;  }
}

function isUnivalTree(node) {
  if (!node) return false;
  if (!node.getLeft() && !node.getRight()) {
    return true;
  }
  if (node.getLeft() && !node.getRight()) {
    if (node.getValue() != node.getLeft().getValue()) {
      return false;
    }
    return isUnivalTree(node.getLeft());
  }
  if (!node.getLeft() && node.getRight()) {
    if (node.getValue() != node.getRight().getValue()) {
      return false;
    }
    return isUnivalTree(node.getRight());
  }
  if (node.getValue() != node.getLeft().getValue() || 
      node.getLeft().getValue() != node.getRight().getValue()) {
    return false
  }
  return isUnivalTree(node.getLeft()) && isUnivalTree(node.getRight());
}

function countUnivalSubTrees(node) {
  count += isUnivalTree(node) ? 1 : 0;
  if (node) {
    countUnivalSubTrees(node.getLeft());
    countUnivalSubTrees(node.getRight());
  }
}

const n5 = new Node('A');
const n4 = new Node('a', null, n5);
const n3 = new Node('a');
const n2 = new Node('a', n3, n4);
const n1 = new Node('a');
const root = new Node('a', n1, n2);

count = 0;
countUnivalSubTrees(root);
console.log(count)

root.setValue('d');
n1.setValue('c');
n5.setValue('a');

count = 0;
countUnivalSubTrees(root);
console.log(count)
