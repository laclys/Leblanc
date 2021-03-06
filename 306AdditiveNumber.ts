/* Additive number is a string whose digits can form additive sequence.

A valid additive sequence should contain at least three numbers. Except for the first two numbers, each subsequent number in the sequence must be the sum of the preceding two.

Given a string containing only digits '0'-'9', write a function to determine if it's an additive number.

Note: Numbers in the additive sequence cannot have leading zeros, so sequence 1, 2, 03 or 1, 02, 3 is invalid.

 

Example 1:

Input: "112358"
Output: true
Explanation: The digits can form an additive sequence: 1, 1, 2, 3, 5, 8. 
             1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
Example 2:

Input: "199100199"
Output: true
Explanation: The additive sequence is: 1, 99, 100, 199. 
             1 + 99 = 100, 99 + 100 = 199
 

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/additive-number
 */

const isAdditiveNumber = function (num: number) {
  if (num.toString().length < 3) {
    return false;
  }
  let ans = false;
  const backtrack = (first: string, second: string, rest: string): void => {
    if (first !== '' && second !== '') {
      //不能为0的两位数，但是可以单个0
      if (
        (first.length > 1 && first[0] === '0') ||
        (second.length > 1 && second[0] === '0')
      ) {
        return;
      }
      let sum = (Number(first) + Number(second)).toString();
      if (rest.indexOf(sum) == 0) {
        //符合条件，往后推
        //注意类型转换，数字没有length属性
        rest = rest.substring(String(sum).length);
        if (!rest.length) {
          //当数组全部取完，那么即是累加数
          ans = true;
        }
        backtrack(second, sum, rest);
      }
      return;
    }
    for (let i = 1; i < Math.floor(rest.length / 2) + 1; i++) {
      first = rest.substring(0, i);
      let temp = rest.substring(i);
      for (let j = 1; j < Math.floor(temp.length / 2) + 1; j++) {
        second = temp.substring(0, j);
        let temp2 = temp.substring(j);
        backtrack(first, second, temp2);
      }
    }
  };
  backtrack('', '', num.toString());
  return ans;
};
