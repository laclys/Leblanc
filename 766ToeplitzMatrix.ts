/* Given an m x n matrix, return true if the matrix is Toeplitz. Otherwise, return false.

A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.

 

Example 1:


Input: matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
Output: true
Explanation:
In the above grid, the diagonals are:
"[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".
In each diagonal all elements are the same, so the answer is True.
Example 2:


Input: matrix = [[1,2],[2,2]]
Output: false
Explanation:
The diagonal "[1, 2]" has different elements.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/toeplitz-matrix
 */

function isToeplitzMatrix(matrix: number[][]): boolean {
  const mLen = matrix.length
  const size = matrix[0].length
  for(let i = 1; i < mLen; i++) {
    for(let j = 1; j < size; j++) {
      if (matrix[i][j] !== matrix[i - 1][j - 1]) {
        return false
      }
    }
  }
  return true
};