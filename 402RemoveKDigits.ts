/* Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.

Note:
The length of num is less than 10002 and will be ≥ k.
The given num does not contain any leading zero.
Example 1:

Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
Example 2:

Input: num = "10200", k = 1
Output: "200"
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
Example 3:

Input: num = "10", k = 2
Output: "0"
Explanation: Remove all the digits from the number and it is left with nothing which is 0.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-k-digits
 */
function removeKdigits(num: string, k: number): string {
  if (num.length <= k) return "0";
  let list = num.split("");
  let j = 0;
  while (k--) {
    while (list[j] <= list[j + 1]) j++;
    list.splice(j, 1);
    j = j > 0 ? j - 1 : 0;
  }
  let t = 0;
  while (list[t] === "0") t++;
  return list.slice(t).join("") || "0";
}

function removeKdigits2(num: string, k: number): string {
  let stack: string[] = []
  if (num.length <= k) return '0'
  for (let i of num) {
    while(k && stack.length && stack[stack.length - 1] > i) {
      k--
      stack.pop()
    }
    if (stack.length || i !== '0') {
      stack.push(i)
    }
  }
  while(k--) stack.pop()
  return stack.join('') || '0'
}