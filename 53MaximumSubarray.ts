/* Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximum-subarray
 */

// [-2,1,-3,4,-1,2,1,-5,4],
const maxSubArray = (nums: number[]): number => {
  let ans = nums[0];
  let sum = 0;
  nums.forEach((num) => {
    if (sum > 0) { // sum + num > num
      sum = sum + num;
    } else {
      sum = num;
    }
    ans = Math.max(ans, sum);
  });
  return ans;
};
