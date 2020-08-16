/* 输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。 
https://leetcode-cn.com/problems/maximum-subarray/

1 <= arr.length <= 10^5
-100 <= arr[i] <= 100

*/

const _maxSubArray = (nums: number[]): number => {
  if (nums.length < 0) return 0;
  let dp: number[] = [nums[0]];
  let res: number = nums[0];
  for (let i = 0; i < nums.length; i++) {
    dp[i] = nums[i];
    if (dp[i - 1] > 0) {
      dp[i] += dp[i - 1];
    }
    res = Math.max(dp[i], res);
  }
  return res;
};

const _maxSubArray2 = (nums: number[]): number => {
  let res = nums[0];
  nums.reduce((total: number, cur: number) => {
    total > 0 ? (total += cur) : (total = cur);
    res = Math.max(total, res);
    return total
  }, 0);
  return res;
};
