/* Write an algorithm to determine if a number n is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Return True if n is a happy number, and False if not.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/happy-number
 */

 // 快慢指针

/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = (n: number): boolean => {
  let slow = sum(n)
  let fast = sum(slow)
  while(slow != fast){
    slow = sum(slow)
    fast = sum(sum(fast))
  }
  return slow == 1
}

const sum = (n: number): number => {
  const nToStr = n + ''
  let ret = 0
  for(let i of nToStr) {
    ret = Number(i) * Number(i) + ret
  }
  return ret
}

export {};