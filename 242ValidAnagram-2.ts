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

function isAnagram2(s: string, t: string): boolean {
  if (s.length !== t.length) return false
  const LEN = s.length
  let mapA = new Map()
  let mapB = new Map()
  for (let i = 0; i < LEN; i++) {
    if (!mapA.has(s[i])) {
      mapA.set(s[i], 1)
    } else {
      mapA.set(s[i], mapA.get(s[i]) + 1)
    }
    if (!mapB.has(t[i])) {
      mapB.set(t[i], 1)
    } else {
      mapB.set(t[i], mapB.get(t[i]) + 1)
    }
  }
  for (let [key, value] of mapA) {
    if (mapA.get(key) !== mapB.get(key)) return false
  }
  return true
}