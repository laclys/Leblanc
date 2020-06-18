/* Given a string s and a string t, check if s is subsequence of t.

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).

Follow up:
If there are lots of incoming S, say S1, S2, ... , Sk where k >= 1B, and you want to check one by one to see if T has its subsequence. In this scenario, how would you change your code?

Credits:
Special thanks to @pbrother for adding this problem and creating all test cases.

 

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/is-subsequence
 */

function isSubsequence(s: string, t: string): boolean {
  let idxFlag = 0;
  let ret = true;
  for (let i = 0; i < s.length; i++) {
    let indexOf = t.indexOf(s[i], idxFlag);
    if (indexOf < 0) {
      ret = false;
      break;
    } else {
      console.log('indexOf', indexOf)
      idxFlag = indexOf + 1
    }
  }
  return ret
}

console.log(isSubsequence("aaaaaa", "bbaaaa"))

