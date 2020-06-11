/* Given an input string, reverse the string word by word.

 

Example 1:

Input: "the sky is blue"
Output: "blue is sky the"
Example 2:

Input: "  hello world!  "
Output: "world! hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
Example 3:

Input: "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-words-in-a-string

 */


/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = (s) => s.split(' ').filter(s => s).reverse().join(' ')