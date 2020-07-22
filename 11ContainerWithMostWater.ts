/* Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/container-with-most-water
 */

const maxArea = (height: number[]): number => {
  let ret = 0;
  let [r, l] = [0, height.length - 1];
  while (r < l) {
    let xLen = l - r;
    let yLen = height[r] > height[l] ? height[l--] : height[r++];
    let area = xLen * yLen;
    ret = Math.max(area, ret);
  }
  return ret;
};
