/* You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

Example 1:

Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/climbing-stairs


 */

function climbStairs(n: number): number {
  let p = 1
  let c = 1
  for (let i = 2; i <= n; i++) {
    let t = c
    c = c + p
    p = t
  }
  return c;
}
