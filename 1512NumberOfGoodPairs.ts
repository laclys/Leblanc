/* Given an array of integers nums.

A pair (i,j) is called good if nums[i] == nums[j] and i < j.

Return the number of good pairs.

 

Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
Example 2:

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.
Example 3:

Input: nums = [1,2,3]
Output: 0


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/number-of-good-pairs
 */
function numIdenticalPairs(nums: number[]): number {
  let ret = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    let temp = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      temp === nums[j] && ret++;
    }
  }
  return ret;
}

type MapType = {
  [key: string]: number
}

function numIdenticalPairs2(nums: number[]): number {
  let map: MapType = {};
  let p = 0;
  for (let i = 0; i < nums.length; i++) {
    let key = nums[i].toString()
    map[key] = map[key] === undefined ? 0 : map[key] + 1;
    p += map[key];
  }
  return p
}
