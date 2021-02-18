/* Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/generate-parentheses
 */


const generateParenthesis = (n: number): string[] =>  {
  let res: string[] = []
  const helper = (l: number, r: number, str: string): void => {
    if (str.length === n * 2) {
      res.push(str)
      return
    }
    if (l < n) {
      helper(l + 1, r, str + '(')
    }

    if ( r < l) {
      helper(l, r + 1, str + ')')
    }
  }
  helper(0, 0,  '')
  return res
};