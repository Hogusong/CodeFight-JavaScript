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
