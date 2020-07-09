/* 
Given an array A of positive lengths, return the largest perimeter of a triangle with non-zero area, formed from 3 of these lengths.

If it is impossible to form any triangle of non-zero area, return 0. */

const largestPerimeter = (A: number[]): number => {
  A.sort((a, b) => a - b);
  const LEN = A.length;
  let ret = 0;
  for (let i = LEN - 1; i >= 2; i--) {
    console.log(A[i], A[i - 1], A[i - 2]);
    if (A[i] < A[i - 1] + A[i - 2]) {
      ret = A[i] + A[i - 1] + A[i - 2];
      break;
    }
  }
  return ret;
};
