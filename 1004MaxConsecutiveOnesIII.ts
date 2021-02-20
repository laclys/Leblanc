/* 
Given an array A of 0s and 1s, we may change up to K values from 0 to 1.

Return the length of the longest (contiguous) subarray that contains only 1s. 

 

Example 1:

Input: A = [1,1,1,0,0,0,1,1,1,1,0], K = 2
Output: 6
Explanation: 
[1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1.  The longest subarray is underlined.
Example 2:

Input: A = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], K = 3
Output: 10
Explanation: 
[0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1.  The longest subarray is underlined.


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/max-consecutive-ones-iii

 */

// right 主动右移 
// left 被动右移
// 判断窗口内的0，如果0的个数超过K，left指针右移 直到窗口内0个数小于K位置
// 窗口长度就是最大值

function longestOnes(A: number[], K: number): number {
  let left = 0
  let right = 0
  let zeroCount = 0 // 滑窗0的个数
  let max = 0
  while(right < A.length) {
    if (A[right] === 0) {
      zeroCount++
    }

    while(zeroCount > K) {
      if (A[left] === 0) {
        zeroCount--
      }
      left++
    }

    max = Math.max(max, right - left + 1)
    right++
  }
  return max
};