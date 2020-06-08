/* Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
    ...
Example 1:

Input: "A"
Output: 1
Example 2:

Input: "AB"
Output: 28
Example 3:

Input: "ZY"
Output: 701

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/excel-sheet-column-number
 */


const titleToNumber = function (s) {
  const arr = s.split('');
  const n = arr.length;
  let res = 0;
  for (let i = 0; i < arr.length; i++)
    res += (arr[i].charCodeAt() - 65 + 1) * Math.pow(26, n - i - 1);
  return res;
};
