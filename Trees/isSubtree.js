// Definition for binary tree:
function Tree(x) {
  this.value = x;
  this.left = null;
  this.right = null;
}

function isSubtree(t1, t2) {
  if (!t2) return true;
  return findAndCheck(t1, t2);
}

function findAndCheck(t1, t2) {
  if (!t1) return false;
  if (t1.value === t2.value && checkValue(t1,t2)) return true ;

  if (t1.left && findAndCheck(t1.left, t2)) return true;
  if (t1.right) return findAndCheck(t1.right, t2)
  return false;
}

function checkValue(t1, t2) {
  if (!t1 && !t2) return true;
  if (!t1 || !t2) return false;
  if (t1.value === t2.value) return checkValue(t1.left, t2.left) && checkValue(t1.right, t2.right)
  return false;
}

t1 = {
  "value": 5,
  "left": {
      "value": 10,
      "left": {
          "value": 4,
          "left": {
              "value": 1,
              "left": null,
              "right": null
          },
          "right": {
              "value": 2,
              "left": null,
              "right": null
          }
      },
      "right": {
          "value": 6,
          "left": null,
          "right": {
              "value": -1,
              "left": null,
              "right": null
          }
      }
  },
  "right": {
      "value": 7,
      "left": null,
      "right": null
  }
}

t2 = {
  "value": 10,
  "left": {
      "value": 4,
      "left": {
          "value": 1,
          "left": null,
          "right": null
      },
      "right": {
          "value": 2,
          "left": null,
          "right": null
      }
  },
  "right": {
      "value": 6,
      "left": null,
      "right": {
          "value": -1,
          "left": null,
          "right": null
      }
  }
}

console.log(isSubtree(t1, t2));
