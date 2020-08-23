/* Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Example 1:

Input: [1,3,5,6], 5
Output: 2
Example 2:

Input: [1,3,5,6], 2
Output: 1
Example 3:

Input: [1,3,5,6], 7 
Output: 4
Example 4:

Input: [1,3,5,6], 0
Output: 0

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/search-insert-position
 */

function searchInsert(nums: number[], target: number): number {
  const len = nums.length;
  let res = len;
  let left = 0;
  let right = len - 1;
  while (left <= right) {
    const index = parseInt(`${(right - left) / 2}`, 10) + left;
    if (target <= nums[index]) {
      res = index;
      right = index - 1;
    } else {
      left = index + 1;
    }
  }
  return res;
}
