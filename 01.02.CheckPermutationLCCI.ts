/* Given two strings,write a method to decide if one is a permutation of the other.

Example 1:

Input: s1 = "abc", s2 = "bca"
Output: true
Example 2:

Input: s1 = "abc", s2 = "bad"
Output: false


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/check-permutation-lcci
 */
const CheckPermutation = (s1: string, s2: string): boolean => s1.split('').sort().join('') === s2.split('').sort().join('')