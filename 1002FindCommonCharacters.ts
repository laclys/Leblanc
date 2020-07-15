/* Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

You may return the answer in any order.

 

Example 1:

Input: ["bella","label","roller"]
Output: ["e","l","l"]
Example 2:

Input: ["cool","lock","cook"]
Output: ["c","o"]
 

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-common-characters
 */

function commonChars(A: string[]): string[] {
  if (!A || A.length === 0) return [];
  let res = A[0].split("");
  for (let i = 0; i < A.length; i++) {
    let temp = A[i].split("");
    res = res.filter((s) => {
      let idx = temp.indexOf(s);
      if (idx !== -1) {
        temp[idx] = "$";
        return true;
      } else {
        return false;
      }
    });
  }
  return res;
}

// console.log(commonChars(["cool", "lock", "cook"]));
