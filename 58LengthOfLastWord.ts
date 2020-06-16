/* Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word (last word means the last appearing word if we loop from left to right) in the string.

If the last word does not exist, return 0.

Note: A word is defined as a maximal substring consisting of non-space characters only.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/length-of-last-word

 */

function lengthOfLastWord(s: string): number {
  const sArr = s.trim().split(' ')
  const sArrLen = sArr.length
  return !sArrLen ? 0 : sArr[sArrLen - 1].length
};