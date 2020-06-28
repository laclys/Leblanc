/* Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

Example:

Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
Note:

If there is no such window in S that covers all characters in T, return the empty string "".
If there is such window, you are guaranteed that there will always be only one unique minimum window in S.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/minimum-window-substring
 */

type ObjType = {
  [key: string]: number;
};

const minWindow = (s: string, t: string): string => {
  let windows: ObjType = {};
  let needs: ObjType = {};
  let l = 0,
    r = 0;
  let count = 0,
    start = -1,
    minLen = Infinity;
  [...t].forEach((c) => (needs[c] ? needs[c]++ : (needs[c] = 1)));
  let keyLen = Object.keys(needs).length;
  while (r < s.length) {
    let c1 = s[r++];
    windows[c1] ? windows[c1]++ : (windows[c1] = 1);
    if (windows[c1] === needs[c1]) {
      count++;
    }
    while (count === keyLen) {
      if (r - l < minLen) {
        start = l;
        minLen = r - l;
      }
      let c2 = s[l++];
      if (windows[c2]-- === needs[c2]) count--;
    }
  }
  return start === -1 ? "" : s.substr(start, minLen);
};
