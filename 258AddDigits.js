
/* Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
 */
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (num >= 10) {
      return addDigits(num.toString().split('').reduce((t,n) =>t + Number(n), 0))
    }
    return num
};

console.log(addDigits(38))