/* Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

Note: This question is the same as 1081: https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/

 

Example 1:

Input: s = "bcabc"
Output: "abc"
Example 2:

Input: s = "cbacdcbc"
Output: "acdb"
 



来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-duplicate-letters
 */

function removeDuplicateLetters(s: string): string {
  const stack: string[] = []
  for(let i = 0, len = s.length; i < len; i++) {
    if (stack.includes(s[i])) continue
    const sLen = stack.length
    while(stack.length && s[i] < stack[sLen - 1] && s.includes(stack[sLen - 1], i)) {
      stack.pop()
    }
    stack.push(s[i])
  }
  return stack.join('') || ''
};
