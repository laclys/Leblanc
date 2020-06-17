/* You are given two arrays (without duplicates) nums1 and nums2 where nums1’s elements are subset of nums2. Find all the next greater numbers for nums1's elements in the corresponding places of nums2.

The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2. If it does not exist, output -1 for this number.

Example 1:
Input: nums1 = [4,1,2], nums2 = [1,3,4,2].
Output: [-1,3,-1]
Explanation:
    For number 4 in the first array, you cannot find the next greater number for it in the second array, so output -1.
    For number 1 in the first array, the next greater number for it in the second array is 3.
    For number 2 in the first array, there is no next greater number for it in the second array, so output -1.
Example 2:
Input: nums1 = [2,4], nums2 = [1,2,3,4].
Output: [3,-1]
Explanation:
    For number 2 in the first array, the next greater number for it in the second array is 3.
    For number 4 in the first array, there is no next greater number for it in the second array, so output -1.


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/next-greater-element-i
 */

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  let ret = [];
  for (let i = 0; i < nums1.length; i++) {
    let idx = nums2.indexOf(nums1[i]);
    let flag = null;
    // let newArr = nums2.slice(idx + 1)
    for (let j = idx + 1; j < nums2.length; j++) {
      if (nums2[j] > nums1[i]) {
        flag = ret.push(nums2[j]);
        break;
      }
    }
    if (!flag) {
      ret.push(-1);
    }
  }
  return ret;
}
