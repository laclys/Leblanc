/* Given a 32-bit signed integer, reverse digits of an integer. */

/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  const isMinus = x < 0;
  const reverseNum = Number(
    (isMinus ? "-" : "") + Math.abs(x).toString().split("").reverse().join("")
  );

  return reverseNum < Math.pow(-2, 31) || reverseNum > Math.pow(2, 31) - 1
    ? 0
    : reverseNum;
};
