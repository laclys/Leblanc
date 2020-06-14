/* Suppose you have a long flowerbed in which some of the plots are planted and some are not. However, flowers cannot be planted in adjacent plots - they would compete for water and both would die.

Given a flowerbed (represented as an array containing 0 and 1, where 0 means empty and 1 means not empty), and a number n, return if n new flowers can be planted in it without violating the no-adjacent-flowers rule.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/can-place-flowers
 */


/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let firstOne = false;
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 1 &&
      flowerbed[i + 1] === 0 &&
      flowerbed[i + 2] === 0 &&
      (flowerbed.length > i + 3 ? flowerbed[i + 3] === 0 : true)
    ) {
      firstOne = true;
      flowerbed[i + 2] = 1;
      n--;
      if (n === 0) break;
    } else if (
      !firstOne &&
      (i > 0 ? flowerbed[i - 1] === 0 : true) &&
      flowerbed[i] === 0 &&
      (flowerbed.length > i + 1 ? flowerbed[i + 1] === 0 : true)
    ) {
      flowerbed[i] = 1;
      n--;
    }
  }
  return n <= 0;
};