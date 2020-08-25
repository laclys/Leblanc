/* A majority element is an element that makes up more than half of the items in an array. Given a positive integers array, find the majority element. If there is no majority element, return -1. Do this in O(N) time and O(1) space.

Example 1:

Input: [1,2,5,9,5,9,5,5,5]
Output: 5
 

Example 2:

Input: [3,2]
Output: -1
 

Example 3:

Input: [2,2,1,1,1,2,2]
Output: 2

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-majority-element-lcci
 */

function _majorityElement(nums: number[]): number {
  const halfLen = nums.length / 2
  let res = -1
  let max = Number.MIN_SAFE_INTEGER
  let hash = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (hash.has(nums[i])) {
      hash.set(nums[i], hash.get(nums[i]) + 1)
    } else {
      hash.set(nums[i], 1)
    }
    max = Math.max(max, hash.get(nums[i]))
    console.log('max', max)
    console.log('halfLen', halfLen)
    if (max > halfLen) return nums[i]
  }
  return res
};

//  console.log(_majorityElement([2,2,1,1,1,2,2]))