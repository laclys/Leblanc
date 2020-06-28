/* Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

Example: 

Input: s = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: the subarray [4,3] has the minimal length under the problem constraint.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/minimum-size-subarray-sum
 */

function minSubArrayLen(s: number, nums: number[]): number {
  let l = 0, r = 0, sum = 0, minLen = Infinity, numLen = nums.length
  while(r < numLen) {
    sum = sum + nums[r]
    while(sum >= s) {
      minLen = Math.min(minLen, r - l + 1)
      sum = sum - nums[l++]
    }
    r++
  }
  return minLen === Infinity ? 0 : minLen
};