/* A popular masseuse receives a sequence of back-to-back appointment requests and is debating which ones to accept. She needs a break between appointments and therefore she cannot accept any adjacent requests. Given a sequence of back-to-back appoint­ ment requests, find the optimal (highest total booked minutes) set the masseuse can honor. Return the number of minutes.

Note: This problem is slightly different from the original one in the book.

 

Example 1:

Input:  [1,2,3,1]
Output:  4
Explanation:  Accept request 1 and 3, total minutes = 1 + 3 = 4
Example 2:

Input:  [2,7,9,3,1]
Output:  12
Explanation:  Accept request 1, 3 and 5, total minutes = 2 + 9 + 1 = 12
Example 3:

Input:  [2,1,4,5,3,1,1,3]
Output:  12
Explanation:  Accept request 1, 3, 5 and 8, total minutes = 2 + 4 + 3 + 3 = 12

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/the-masseuse-lcci
 */

const massage = (nums: number[]): number => {
  const LEN = nums.length;
  if (!LEN) return 0;
  if (LEN === 1) return nums[0];
  let p = nums[0]; // 1
  let c = Math.max(p, nums[1]);
  let ret = c;
  for (let i = 2; i < LEN; i++) {
    let temp = c;
    c = Math.max(c, nums[i] + p);
    p = temp;
    ret = Math.max(c, ret);
  }
  return ret;
};
