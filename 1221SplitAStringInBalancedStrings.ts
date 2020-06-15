/* 
Balanced strings are those who have equal quantity of 'L' and 'R' characters.

Given a balanced string s split it in the maximum amount of balanced strings.

Return the maximum amount of splitted balanced strings. */


function balancedStringSplit(s: string): number {
  const sArr = s.split('')
  let count = 0, sum = 0
  sArr.forEach(i => {
      if (i === 'L') count++
      if (i === 'R') count--
      if (!count) sum++
  })
  return sum
};

// ???
// /**
//  * @param {string} s
//  * @return {number}
//  */
// var balancedStringSplit = function(s) {
//   const sArr = s.split('')
//   let = sum = 0
//   for (let i = 0; i < sArr.length; i++) {
//       if (sArr[i+ 1] && sArr[i] !==sArr[i+ 1]) {
//           sum+=1
//           i++
//       }
//   }
//   return sum
// };