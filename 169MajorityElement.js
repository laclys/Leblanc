/* Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/majority-element

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
  const flag = nums.length / 2;
  let tempObj = {};
  for (let i = 0; i < nums.length; i++) {
    if (!tempObj[nums[i]]) {
      tempObj[nums[i]] = 1;
    } else {
      tempObj[nums[i]] = tempObj[nums[i]] + 1;
    }
    if (tempObj[nums[i]] >= flag) {
      return nums[i]
    }
  }
  return 0;
};