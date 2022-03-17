/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  const sort = (s, e) => {
      if (s >= e) return
      let key = nums[s]
      let left = s + 1
      let right = e
      while (true) {
          while (left <= right && nums[left] < key) left++
          while (left <= right && nums[right] >= key) right--
          if (left < right) {
              const temp = nums[left]
              nums[left] = nums[right]
              nums[right] = temp
          } else break
      }
      nums[s] = nums[right]
      nums[right] = key
      sort(s, right - 1)
      sort(right + 1, e)
  }
  sort(0, nums.length - 1)
  return nums
}

var sortColors = function(nums) {
    
    const quickSort = (s, e) => {
        if (s >= e) return;
        let mid = Math.floor((s + e) / 2);
        const n = nums[mid];
        let left = s, right = e;
        while (left < right) {
            while (left < mid && nums[left] <= n) left++;
            while (right > mid && nums[right] > n) right--;
            if (left == right) break;
            if (left == mid) {
                nums[mid] = nums[right];
                nums[right] = nums[mid + 1];
                nums[mid + 1] = n;
                mid++;
            } else if (right == mid) {
                nums[mid] = nums[left];
                nums[left] = nums[mid - 1];
                nums[mid - 1] = n;
                mid--;                
            } else [nums[left], nums[right]] = [nums[right], nums[left]]
        }
        quickSort(s, mid - 1);
        quickSort(mid + 1, e);
    }
    
    quickSort(0, nums.length - 1);
}

// Only possible when I know how many colors.
var sortColors = function(nums) {
  let n = 0, index = 0;
  while (n < 3) {
      for (let i = index; i < nums.length; i++) {
          if (nums[i] == n) {
              const temp = nums[index];
              nums[index++] = nums[i];
              nums[i] = temp
          }
      }
      n++;
  }
  return nums;
};
