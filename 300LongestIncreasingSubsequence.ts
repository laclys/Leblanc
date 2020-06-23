/* Given an unsorted array of integers, find the length of longest increasing subsequence.

Example:

Input: [10,9,2,5,3,7,101,18]
Output: 4 
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-increasing-subsequence

 */


const lengthOfLIS = (nums: number[]): number => {
  const LEN = nums.length
  if (LEN < 1) return 0
  let dpArr = Array.from(Array(LEN),v => 1)
  for (let i = 0; i < LEN; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dpArr[i] = Math.max(dpArr[i], dpArr[j] + 1)
      }
    }
  }
  return Math.max(...dpArr)
};