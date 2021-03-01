/* Today, the bookstore owner has a store open for customers.length minutes.  Every minute, some number of customers (customers[i]) enter the store, and all those customers leave after the end of that minute.

On some minutes, the bookstore owner is grumpy.  If the bookstore owner is grumpy on the i-th minute, grumpy[i] = 1, otherwise grumpy[i] = 0.  When the bookstore owner is grumpy, the customers of that minute are not satisfied, otherwise they are satisfied.

The bookstore owner knows a secret technique to keep themselves not grumpy for X minutes straight, but can only use it once.

Return the maximum number of customers that can be satisfied throughout the day.

 

Example 1:

Input: customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], X = 3
Output: 16
Explanation: The bookstore owner keeps themselves not grumpy for the last 3 minutes. 
The maximum number of customers that can be satisfied = 1 + 1 + 1 + 1 + 7 + 5 = 16.


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/grumpy-bookstore-owner */

function maxSatisfied(customers: number[], grumpy: number[], X: number): number {
  let total = 0
  const grumpyLen = grumpy.length
  customers.forEach((item, idx) => {
    if (grumpy[idx] === 0) {
      total += item
    }
  })

  let tempTotal = 0
  for (let i = 0; i < X; i++) {
    tempTotal +=  grumpy[i] * customers[i]
  }

  let max = tempTotal

  for (let i = X; i < grumpyLen; i++) {
    tempTotal = tempTotal - customers[i - X] *  grumpy[i - X] + customers[i] *  grumpy[i]
    max = Math.max(tempTotal, max)
  }

  return total + max
};