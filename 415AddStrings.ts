/* Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

 

Example 1:

Input: num1 = "11", num2 = "123"
Output: "134"
Example 2:

Input: num1 = "456", num2 = "77"
Output: "533"
Example 3:

Input: num1 = "0", num2 = "0"
Output: "0"
 
 */

function addStrings(num1: string, num2: string): string {
  let num1Idx = num1.length - 1
  let num2Idx = num2.length - 1
  let ret = ''
  let carry = 0
  while (num1Idx >= 0 || num2Idx >= 0) {
    const temp =
      (num1Idx >= 0 ? parseInt(num1[num1Idx]) : 0) +
      (num2Idx >= 0 ? parseInt(num2[num2Idx]) : 0) +
      carry
    carry = Math.floor(temp / 10)
    ret = (temp % 10) + ret
    num1Idx--
    num2Idx--
  }
  return carry === 1 ? carry + ret : ret
}
