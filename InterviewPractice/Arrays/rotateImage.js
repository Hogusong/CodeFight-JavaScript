function rotateImage(a) {
  const n = a.length
  if (n < 2) return a
  const x = []
  for (let i=0; i<n; i++){
      x[i] = []
  }
  for (let r=0; r<n; r++){
      for (let c=0; c<n; c++){
          x[c][n-r-1] = a[r][c]
      }
  }    
  return x
}
