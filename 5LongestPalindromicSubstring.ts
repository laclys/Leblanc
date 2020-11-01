/* Given a string s, return the longest palindromic substring in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
Example 3:

Input: s = "a"
Output: "a"
Example 4:

Input: s = "ac"
Output: "a"

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-palindromic-substring
 */

function longestPalindrome(s: string): string {
  if (s.length < 2) return s
  let start = 0
  let maxLen = 1

  function expanndAroundCenter(left: number, right: number) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxLen) {
        maxLen = right - left + 1
        start = left
      }
      left--
      right++
    }
  }

  for (let i = 0; i < s.length; i++) {
    expanndAroundCenter(i - 1, i + 1)
    expanndAroundCenter(i, i + 1)
  }

  return s.substring(start, start + maxLen)
}
