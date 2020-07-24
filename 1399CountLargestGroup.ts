/* Given an integer n. Each number from 1 to n is grouped according to the sum of its digits. 

Return how many groups have the largest size.

 

Example 1:

Input: n = 13
Output: 4
Explanation: There are 9 groups in total, they are grouped according sum of its digits of numbers from 1 to 13:
[1,10], [2,11], [3,12], [4,13], [5], [6], [7], [8], [9]. There are

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/count-largest-group
 */

function countLargestGroup(n: number): number {
  let m = new Map();
  let ans = 0;
  let max;

  for (let i = 1; i <= n; i++) {
    let key = 0;
    [...String(i)].forEach((val) => {
      key += Number(val);
    });
    m.set(key, m.has(key) ? m.get(key) + 1 : 1);
  }
  max = Math.max(...Array.from(m.values()));

  for (let val of m.values()) {
    if (val === max) {
      ans++;
    }
  }

  return ans;
}

// console.log(countLargestGroup(24));
