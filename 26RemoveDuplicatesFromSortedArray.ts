/* Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums: number[]): number => {
  const len = nums.length;
  let index = 0;
  for (let i = 0; i < len; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[index] = nums[i];
      index++;
    }
  }
  return index;
};
