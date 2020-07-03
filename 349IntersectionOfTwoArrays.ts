/* Given two arrays, write a function to compute their intersection.
 */

const intersection = (nums1: number[], nums2: number[]): number[] => [
  ...new Set(nums1.filter((item) => nums2.includes(item))),
];
