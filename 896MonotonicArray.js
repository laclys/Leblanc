/* An array is monotonic if it is either monotone increasing or monotone decreasing.

An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array A is monotone decreasing if for all i <= j, A[i] >= A[j].

Return true if and only if the given array A is monotonic.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/monotonic-array
 */


/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  function increasing(){
      for(let i=0;i<A.length-1;i++){
          if(A[i] > A[i+1]) return false
      }
      return true
  }
  function decreasing(){
      for(let i=0;i<A.length-1;i++){
          if(A[i] < A[i+1]) return false
      }
      return true
  }
  return increasing() || decreasing()
};