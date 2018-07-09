function firstNotRepeatingCharacter(s) {
  let S = s.split('')
  if (S.length < 2) return s
  for (i=1; i<S.length; i++) {
      const l = S[i]
      const S1 = s.slice(0,i)
      const S2 = s.slice(i+1)
      if (S1.indexOf(l) < 0 && S2.indexOf(l) < 0)
          return l        
  }
  return '_'
}
