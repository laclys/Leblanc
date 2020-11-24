/* Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/linked-list-cycle
 */

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function hasCycle(head: ListNode | null): boolean {
  if (head === null) return false

  let show = head
  let fast = head
  while (fast.next !== null && fast.next.next !== null) {
    show = show.next!
    fast = fast.next.next!
    if (show === fast) {
      return true
    }
  }
  return false
}
