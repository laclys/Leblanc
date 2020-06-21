/* 
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings. */

function longestCommonPrefix(strs: string[]): string {
  let str = strs[0];
  if (!str) return "";
  let res: string = "";
  for (let i = 0; i < str.length; i++) {
    let flag = strs.every((item) => item[i] == str[i]);
    if (flag) {
      res += str[i];
    } else {
      return res;
    }
  }
  return res
}
