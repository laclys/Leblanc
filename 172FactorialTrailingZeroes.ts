/* 
Given an integer n, return the number of trailing zeroes in n!.

Example 1:

Input: 3
Output: 0
Explanation: 3! = 6, no trailing zero.
Example 2:

Input: 5
Output: 1
Explanation: 5! = 120, one trailing zero.
 */

function trailingZeroes(n: number): number {
  let res = 0;
  while (n >= 5) {
    let k = Math.floor(n / 5);
    res += k;
    n = k;
  }
  return res;
}
