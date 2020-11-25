/* Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.

Example:

Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/keyboard-row
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = function (words) {
  const keyboard = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  return words.filter(item => {
    let str = item
    keyboard.forEach((j,idx) => {
      str = str.toLocaleLowerCase().replace(new RegExp(`[${j}]`, 'g'), idx)
    })
    return new Set(str).size === 1
  })
};
