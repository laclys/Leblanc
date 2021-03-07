function sumOddLengthSubarrays(arr: number[]): number {
  const Len = arr.length
  let sum = 0
  for (let i = 1; i <= Len; i += 2) {
    for (let j = 0; j <= Len - i; j++) {
      for (let k = j; k < j + i; k++) {
        sum += arr[k]
      }
    }
  }
  return sum
}
