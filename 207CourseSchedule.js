/* 
There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

 

Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0, and to take course 0 you should
             also have finished course 1. So it is impossible.
 

Constraint
 */

const canFinish = (numCourses, prerequisites) => {
  const inDegree = new Array(numCourses).fill(0);
  let graph = {}; // 邻接表
  for (let i = 0; i < prerequisites.length; i++) {
    inDegree[prerequisites[i][0]]++; // 计算课对应的入度
    if (graph[prerequisites[i][1]]) {
      // 当前课已经存在于邻接表
      graph[prerequisites[i][1]].push(prerequisites[i][0]); // 对应的数组新推入依赖它的课
    } else {
      // 当前课不存在于邻接表
      let list = []; // 创建该门课对应的list数组
      list.push(prerequisites[i][0]); // 推入依赖它的课
      graph[prerequisites[i][1]] = list;
    }
  }
  const queue = []; // BFS需要的队列
  for (let i = 0; i < inDegree.length; i++) {
    //初始推入所有入度0的课
    if (inDegree[i] === 0) queue.push(i);
  }
  while (queue.length) {
    const select = queue.shift(); // 可选的课，出栈
    const toEnQueue = graph[select]; // 获取这门课对应的后续课
    if (toEnQueue && toEnQueue.length) {
      // 确实有后续课
      for (let i = 0; i < toEnQueue.length; i++) {
        inDegree[toEnQueue[i]]--; // 依赖它的后续课的入度-1
        if (inDegree[toEnQueue[i]] == 0) {
          // 如果因此减为0，入列
          queue.push(toEnQueue[i]); // 这门课入列
        }
      }
    }
  }
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] !== 0) return false; // 还有课的入度不为0
  }
  return true;
};
