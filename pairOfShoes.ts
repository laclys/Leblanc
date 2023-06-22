/* Yesterday you found some shoes in the back of your closet. Each shoe is described by two values:

type indicates if it’s a left or a right shoe;
size is the size of the shoe.
Your task is to check whether it is possible to pair the shoes you found in such a way that each pair consists of a right and a left shoe of an equal size.

Example

For

shoes = [[0, 21],
[1, 23],
[1, 21],
[0, 23]]

the output should be pairOfShoes(shoes) = true;

For shoes = [[0, 21],
[1, 23],
[1, 21],
[1, 23]]
the output should be pairOfShoes(shoes) = false.

 */

function pairOfShoes(shoes: Array<[number, number]>): boolean {
  while (shoes.length) {
    let shoe = shoes.pop()
    let pos = shoes.findIndex(
      ([type, size]) => size === shoe?.[1] && type === 1 - shoe[0]
    )
    console.log(pos)
    if (pos >= 0) {
      shoes.splice(pos, 1)
    } else {
      return false
    }
  }
  return true
}

// console.log(
//   pairOfShoes([
//     [0, 21],
//     [1, 23],
//     [1, 21],
//     [1, 23],
//   ])
// )
// console.log(
//   pairOfShoes([
//     [0, 21],
//     [0, 23],
//     [1, 21],
//     [1, 23],
//   ])
// )
