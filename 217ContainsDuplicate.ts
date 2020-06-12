/* Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:

Input: [1,2,3,1]
Output: true
Example 2:

Input: [1,2,3,4]
Output: false

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/contains-duplicate


 */

function containsDuplicate(nums: number[]): boolean {
  return nums.length !== new Set(nums).size;
}
