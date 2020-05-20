/* Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

链接：https://leetcode-cn.com/problems/valid-parentheses */

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  while(s.length) {
    let temp = s
    s = s.replace('()', '')
    s = s.replace('[]', '')
    s = s.replace('{}', '')
    if (temp === s) return false
  }
  return true
};