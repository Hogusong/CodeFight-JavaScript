function containsCloseNums(nums, k) {
  if (nums.length < 2) return false
  for (let i=0; i<nums.length; i++) {
      for (let j=i+1; j<=i+k; j++) {
          if ( j >= nums.length) break
          if (nums[i] === nums[j]) return true
      }
  }
  return false
}

// function containsCloseNums(nums, k) {
//     const obj = {}
//     for (let i=0; i<nums.length; i++) {
//         if ((nums[i] in obj) && (i - obj[nums[i]] <= k)) return true
//         obj[nums[i]] = i
//     }
//     return false
// }

