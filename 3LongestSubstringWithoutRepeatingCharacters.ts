const lengthOfLongestSubstring = (s: string): number => {
  let tempArr: string[] = [], max: number = 0
  for (let i = 0; i < s.length; i++) {
    if (tempArr.includes(s[i])) {
      tempArr.splice(0, tempArr.indexOf(s[i]) + 1)
    } 
    tempArr.push(s[i])
    max = Math.max(max, tempArr.length)
  }
  return max
};
