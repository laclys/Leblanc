/* Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

链接：https://leetcode-cn.com/problems/two-sum */

const twoSum = function(nums, target) {
  let obj = {}
  let ret = []
  for (let i = 0; i < nums.length; i++) {
      if (obj[nums[i]] === undefined) {
          obj[target-nums[i]] = nums[i]
      } else {
        return [i, nums.indexOf(obj[nums[i]])].sort()
      }
  }
  return ret
};

// console.log(twoSum([2, 7, 11, 15], 9))
// console.log(twoSum([0,4,3,0], 0))