/* 
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  let ret = [];
  const len = nums.length;
  if (!nums || len < 3) return ret;

  nums.sort((a, b) => a - b); // 排序

  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let L = i + 1;
    let R = len - 1;
    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R];
      if (sum === 0) {
        console.log('1',[nums[i], nums[L], nums[R]])
        ret.push([nums[i], nums[L], nums[R]]);
        while (L < R && nums[L + 1] === nums[L]) L++;
        while (L < R && nums[R - 1] === nums[R]) R--;
        L++;
        R--;
      } else if (sum > 0) {
        R--
      } else {
        L ++
      }
    }
  }
  return ret
};
