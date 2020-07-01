/* Given a list of non negative integers, arrange them such that they form the largest number.

Example 1:

Input: [10,2]
Output: "210"
Example 2:

Input: [3,30,34,5,9]
Output: "9534330"
 */

const largestNumber = (nums: number[]): string => {
  const ret = nums
    .sort((a, b) => Number(`${b}${a}`) - Number(`${a}${b}`))
    .join('');
  return ret[0] === '0' ? '0' : ret;
};
