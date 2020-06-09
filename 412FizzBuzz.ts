/* Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

Example:

n = 15,

Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/fizz-buzz

 */

type RetType = number | string;

const fizzBuzz = function (n: number): RetType[] {
  let result = [];
  for (let i = 1; i < n + 1; i++) {
    let ans = '';
    ans += i % 3 ? '' : 'Fizz';
    ans += i % 5 ? '' : 'Buzz';
    if (!ans) ans += i;
    result.push(ans);
  }
  return result;
};
