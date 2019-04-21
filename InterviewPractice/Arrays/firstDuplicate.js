function firstDuplicate(a) {
  const d = {}
  var ans = -1
  for (let i=0; i<a.length; i++) {
      if (a[i] in d) {
          ans = a[i]
          break
      } else {
          d[a[i]] = i
      }
  }
  return ans
}


function firstDup(a) {
    const d = [];
    for (let i=0; i< a.length; i++) {
        if (d.find(e => e === a[i])) {
            return a[i];
        }
        d.push(a[i])
    }
    return -1
}

const msg = 'asgvxwij sadqeknrf gaqwekfq; gvb aqdbr'
console.log(firstDup(msg));
console.log(firstDuplicate(msg))
