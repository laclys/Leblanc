/* Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

链接：https://leetcode-cn.com/problems/find-the-duplicate-number */
const findDuplicate = function (nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = nums[i];
    } else {
      return nums[i];
    }
  }
  return null;
};
