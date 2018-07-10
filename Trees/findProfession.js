function findProfession(level, pos) {
  if (level === 1) return 'Engineer'
  let p = pos
  let count = 0
  while (p > 1) {
      count += (p%2 === 0) ? 1 : 0;
      p = Math.round(p/2)
  }
  return (count%2 === 1) ? "Doctor" : "Engineer" ;
}

function findProfession2(level, pos) {
  if (level === 1) return 'Engineer'
  let p = pos
  let isSameAsP = []
  while (p > 1) {
      isSameAsP.push((p%2 === 1) ? true : false)
      p = Math.round(p/2)
  }
  let profession = 'Engineer'
  for (let i=0; i<isSameAsP.length; i++) {
      if (!isSameAsP[i]) {
          profession = (profession === "Engineer") ? "Doctor" : "Engineer"
      }
  }
  return profession;   
}
