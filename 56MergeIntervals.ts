/* Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/merge-intervals
 */

const merge2 = (intervals:number[][]): number[][] => {
  intervals = intervals.sort( (a,b)=> a[0]-b[0])
  for( let i=0; i<intervals.length-1; i++){
      const a2 = intervals[i][1],
            b1 = intervals[i+1][0],
            b2 = intervals[i+1][1];
      if( a2 >= b1 ){
          intervals[i][1] = a2 > b2 ? a2 : b2
          intervals.splice(i+1,1)
          i--
      }
  }
  return intervals
};