// Definition for binary tree:
function Tree(x) {
  this.value = x;
  this.left = null;
  this.right = null;
}

function hasPathWithGivenSum(t, s) {
  if (!t) return false;
  if (!t.left && !t.right)  return (t.value === s);
  
  var hasSum = false;
  if (t.left) getSum(t.left, t.value, s) 
  if (t.right) getSum(t.right, t.value, s)
  return hasSum

  function getSum(t, v, s) {
    if (!t.left && !t.right && v+t.value === s) hasSum = true ;
    if (t.left && !hasSum) getSum(t.left, t.value+v, s) 
    if (t.right && !hasSum) getSum(t.right, t.value+v, s)
  }
}

t = {
  "value": 4,
  "left": {
      "value": 1,
      "left": {
          "value": -2,
          "left": null,
          "right": {
              "value": 3,
              "left": null,
              "right": null
          }
      },
      "right": null
  },
  "right": {
      "value": 3,
      "left": {
          "value": 1,
          "left": null,
          "right": null
      },
      "right": {
          "value": 2,
          "left": {
              "value": -2,
              "left": null,
              "right": null
          },
          "right": {
              "value": -3,
              "left": null,
              "right": null
          }
      }
  }
}

console.log(hasPathWithGivenSum(t, 7))
