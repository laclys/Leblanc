/* Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/group-anagrams
 */

const groupAnagrams = (strs: string[]): string[][] => {
  let hash = new Map()
  strs.forEach((s, i) => {
    const tempStr = s.split('').sort().join()
    if (hash.has(tempStr)) {
      let tempArr = hash.get(tempStr)
      tempArr.push(s)
      hash.set(tempStr, tempArr)
    } else {
      hash.set(tempStr, [s])
    }
  })
  return [...hash.values()]
};

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))