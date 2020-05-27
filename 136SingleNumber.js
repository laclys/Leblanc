/* Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

链接：https://leetcode-cn.com/problems/single-number */

// tips: n ^ n = 0; n ^ 0 = n

const singleNumber = (nums) => {
  return nums.reduce((r, n) => {
    return r ^ n;
  }, 0);
};

// console.log(singleNumber([4,1,2,1,2]));
