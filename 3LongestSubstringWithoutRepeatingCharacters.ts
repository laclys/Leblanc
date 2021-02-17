/* Given a string s, find the length of the longest substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters */


const lengthOfLongestSubstring = function (s: string): number {

  let arr = []
  let max = 0
  for (let i = 0; i < s.length; i++) {
    const idx = arr.indexOf(s[i])
    // 是否在arr中出现过，如果出现从数组开头到当前字符串全部截取掉
    if (idx !== -1) {
      arr.splice(0, idx + 1)
    }
    // / 放进新的字符
    arr.push(s[i])
    // 拿最大值
    max = Math.max(arr.length, max)
  }
  return max
}
