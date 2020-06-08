/* Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/move-zeroes
 */


function moveZeroes(nums: number[]): void {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[j], nums[i]] = [nums[i], nums[j]];
      j++;
    }
  }
}

// let numsss = [0,1,0,3,12]
// moveZeroes(numsss)
// console.log(numsss)