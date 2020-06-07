/* Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/product-of-array-except-self
 */

const productExceptSelf = (nums: number[]): number[] => {
  const N = nums.length;
  let output = [];
  output[0] = 1;
  for (let i = 1; i < N; i++) {
    output[i] = output[i - 1] * nums[i - 1];
  }

  let rightOutput = 1;
  for (let i = N - 1; i >= 0; i--) {
    output[i] = rightOutput * output[i];
    rightOutput = rightOutput * nums[i];
  }

  return output;
};
