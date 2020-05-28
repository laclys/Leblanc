/* Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

链接：https://leetcode-cn.com/problems/decode-string
 */
const decodeString = (s) => {
  const NUM = '0123456789'
  const ALP = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let strArr = [], i = 0
  while (i < s.length) {
    const it = s[i]
    if (NUM.includes(it) || ALP.includes(it) || it === '[') {
      strArr.push(it)
    } else if (it === ']') {
      let tempStr = ''
      while(strArr[strArr.length - 1] !== '[') {
        tempStr =  strArr.pop() + tempStr
      }
      strArr.pop()
      let numStr = ''
      while(NUM.includes(strArr[strArr.length - 1])) {
        numStr = strArr.pop() + numStr
      }
      strArr.push(tempStr.repeat(parseInt(numStr, 10)))
    }
    i++
  }
  return strArr.reduce((t, s) => t = t + s, '')
}