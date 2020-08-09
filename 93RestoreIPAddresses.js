/* Given a string containing only digits, restore it by returning all possible valid IP address combinations.

A valid IP address consists of exactly four integers (each integer is between 0 and 255) separated by single points.

Example:

Input: "25525511135"
Output: ["255.255.11.135", "255.255.111.35"]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/restore-ip-addresses
 */

const restoreIpAddresses = (s) => { 
  const res = [];
  const dfs = (subRes, start) => {                 
    if (subRes.length == 4 && start == s.length) { 
      res.push(subRes.join('.'));                
      return;                                     
    }
    if (subRes.length == 4 && start < s.length)    
      return;
    for (let len = 1; len <= 3; len++) {           
      if (start + len - 1 >= s.length) return;     
      if (len != 1 && s[start] == '0') return;     
      const str = s.substring(start, start + len); 
      if (len == 3 && +str > 255) return;        
      subRes.push(str);                     
      dfs(subRes, start + len);               
      subRes.pop();                     
    }
  };
  dfs([], 0);                                 
  return res;
};