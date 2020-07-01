/* Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-anagram
 */

function isAnagram(s: string, t: string): boolean {
  return [...s].sort().toString() === [...t].sort().toString();
}
