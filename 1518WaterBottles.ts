/* Given numBottles full water bottles, you can exchange numExchange empty water bottles for one full water bottle.

The operation of drinking a full water bottle turns it into an empty bottle.

Return the maximum number of water bottles you can drink.

 

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/water-bottles
 */

function numWaterBottles(numBottles: number, numExchange: number): number {
  let count = numBottles;
  while (numBottles >= numExchange) {
    let temp = Math.floor(numBottles / numExchange);
    count += temp
    numBottles = temp + (numBottles % numExchange);
  }
  return count;
};