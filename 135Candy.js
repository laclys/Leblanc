/* There are N children standing in a line. Each child is assigned a rating value.

You are giving candies to these children subjected to the following requirements:

Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
What is the minimum candies you must give?

Example 1:

Input: [1,0,2]
Output: 5
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/candy

 */
const candy = (ratings) => {
  const len = ratings.length;
  let temp = Array.from({ length: len }, (x) => 1);

  for (let i = 1; i < len; i++) {
    if (ratings[i] > ratings[i - 1]) {
      temp[i] = temp[i - 1] + 1;
    }
  }

  for (let j = len - 2; j >= 0; j--) {
    if (ratings[j] > ratings[j + 1] && temp[j] <= temp[j + 1]) {
      temp[j] = temp[j + 1] + 1;
    }
  }
  return temp.reduce((sum, item) => sum + item, 0);
};

// console.log(candy([1, 0, 2]));
