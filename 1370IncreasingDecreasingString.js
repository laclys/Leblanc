/* Given a string s. You should re-order the string using the following algorithm:

Pick the smallest character from s and append it to the result.
Pick the smallest character from s which is greater than the last appended character to the result and append it.
Repeat step 2 until you cannot pick more characters.
Pick the largest character from s and append it to the result.
Pick the largest character from s which is smaller than the last appended character to the result and append it.
Repeat step 5 until you cannot pick more characters.
Repeat the steps from 1 to 6 until you pick all characters from s.
In each step, If the smallest or the largest character appears more than once you can choose any occurrence and append it to the result.

Return the result string after sorting s with this algorithm.

 

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/increasing-decreasing-string
 */

function sortString(s) {
  let map = {}
  let res = []
  let hander = function (keys) {
    keys.forEach(key => {
      if (map[key] > 0) {
        res.push(key)
        map[key]--
      }
    })
  }
  s.split('').forEach(c => {
    map[c] = map[c] ? map[c] + 1 : 1
  })
  while (res.length != s.length) {
    let keys = Object.keys(map)
    keys.sort((a, b) => { return a.charCodeAt() - b.charCodeAt() })
    hander(keys)
    keys.sort((a, b) => { return b.charCodeAt() - a.charCodeAt() })

    hander(keys)
  }
  return res.join('')
};