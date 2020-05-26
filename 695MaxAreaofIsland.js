/* Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

链接：https://leetcode-cn.com/problems/max-area-of-island
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = (grid) => {
  let maxArea = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        maxArea = Math.max(maxArea, dfs(grid, i, j));
      }
    }
  }
  return maxArea;
};

const dfs = (grid, i, j) => {
  if (
    i < 0 ||
    j < 0 ||
    i >= grid.length ||
    j >= grid[i].length ||
    grid[i][j] === 0
  ) {
    return 0;
  }
  let area = 1;
  grid[i][j] = 0;
  area += dfs(grid, i - 1, j);
  area += dfs(grid, i + 1, j);
  area += dfs(grid, i, j - 1);
  area += dfs(grid, i, j + 1);
  return area;
};

console.log(maxAreaOfIsland(
  [[0,1]]))