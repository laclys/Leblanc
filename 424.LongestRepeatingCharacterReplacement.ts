/* Given a string s that consists of only uppercase English letters, you can perform at most k operations on that string.

In one operation, you can choose any character of the string and change it to any other uppercase English character.

Find the length of the longest sub-string containing all repeating letters you can get after performing the above operations.

Note:
Both the string's length and k will not exceed 104.

Example 1:

Input:
s = "ABAB", k = 2

Output:
4

Explanation:
Replace the two 'A's with two 'B's or vice versa.
 

Example 2:

Input:
s = "AABABBA", k = 1

Output:
4

Explanation:
Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-repeating-character-replacement
 */

function characterReplacement(s: string, k: number): number {
  if (!s) return 0
  let codesArr = Array(26).fill(0) // 26个字母 出现次数
  let left = 0
  let max = 0
  for (let right = 0; right < s.length; right++) {
    let n = s[right].charCodeAt(0) - 65
    codesArr[n]++
    max = Math.max(max, codesArr[n])
    if (right - left + 1 > max + k) { // 窗口大小 大于 max + k, 则窗口左边收缩
      codesArr[s[left].charCodeAt(0) - 65]--
      left++
    }
  }
  return s.length - left // 窗口大小 left + right - 1 = s.length - left
};