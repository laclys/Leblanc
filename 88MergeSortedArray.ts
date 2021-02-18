/* Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/merge-sorted-array
 */

function merge(nums1: number[], n: number, nums2: number[], m: number): void {
  let nIdx = n - 1
  let mIdx = m - 1
  let tIdx = n + m - 1

  while(nIdx >=0 && mIdx >=0) {
    if (nums1[nIdx] > nums2[mIdx]) {
      nums1[tIdx] = nums1[nIdx]
      nIdx--
    } else {
      nums1[tIdx] = nums2[mIdx]
      mIdx--
    }
    tIdx--
  }

  while(tIdx >= 0 && nIdx >= 0) {
      nums1[tIdx] = nums1[nIdx];
      nIdx--;
      tIdx--;
  }
    while(tIdx >= 0 && mIdx >= 0) {
      nums1[tIdx] = nums2[mIdx];
      mIdx--;
      tIdx--;
  }
}