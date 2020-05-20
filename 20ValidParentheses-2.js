/* Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

链接：https://leetcode-cn.com/problems/valid-parentheses */

const isValid = function (s) {
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let leftArr = [];
  for (let ch of s) {
    if (ch in map) {
      leftArr.push(ch);
    } else {
      if (ch !== map[leftArr[leftArr.length - 1]]) {
        return false;
      } else {
        leftArr.pop()
      }
    }

  }
  return !leftArr.length;
};

console.log(isValid('()'))
