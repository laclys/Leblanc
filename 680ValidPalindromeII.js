/* Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

链接：https://leetcode-cn.com/problems/valid-palindrome-ii */

/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = function (s, flag = true) {
  let l = 0,
    r = s.length - 1;
  while (l < r && s[l] === s[r]) l++, r--;
  if (l >= r) return true;
  if (flag) {
    return (
      validPalindrome(s.slice(l, r), false) ||
      validPalindrome(s.slice(l + 1, r + 1), false)
    );
  }
  return false;
};
