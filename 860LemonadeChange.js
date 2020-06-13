/* At a lemonade stand, each lemonade costs $5. 

Customers are standing in a queue to buy from you, and order one at a time (in the order specified by bills).

Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.  You must provide the correct change to each customer, so that the net transaction is that the customer pays $5.

Note that you don't have any change in hand at first.

Return true if and only if you can provide every customer with correct change.

 

Example 1:

Input: [5,5,5,10,20]
Output: true
Explanation: 
From the first 3 customers, we collect three $5 bills in order.
From the fourth customer, we collect a $10 bill and give back a $5.
From the fifth customer, we give a $10 bill and a $5 bill.
Since all customers got correct change, we output true.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/lemonade-change

 */


/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let obj = {
      5: 0,
      10: 0
  }
  let flag = true
  for (let i = 0; i < bills.length; i++) {
      let num = bills[i]
      if (num === 5){
          obj[5] = obj[5] + 1
      } else if(num === 10) {
          if (obj[5] < 0) {
              flag = false
              break 
          } else {
            obj[10] = obj[10] + 1
            obj[5] = obj[5] - 1
          }
      } else {
          if (obj[10] > 0 && obj[5] > 0) {
              obj[10] = obj[10] - 1
              obj[5] = obj[5] - 1
          } else if (obj[5] > 2) {
              obj[5] = obj[5] - 3
          } else {
              flag = false
              break 
          }
      }
  }
  return flag
};