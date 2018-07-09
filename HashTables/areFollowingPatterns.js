function areFollowingPatterns(strings, patterns) {
  for (let i=0; i<strings.length; i++) {
      for (let j=i+1; j<strings.length; j++) {
          if (strings[i] !== strings[j] && patterns[i] === patterns[j] ) return false;
          if (strings[i] === strings[j] && patterns[i] !== patterns[j] ) return false;
      }
  }    
  return true
}
