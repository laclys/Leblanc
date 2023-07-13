/* 实现一个 LazyMan，可以按照以下方式调用：
LazyMan("Hank")
输出：Hi! This is Hank!

LazyMan("Hank").sleep(10).eat("dinner")
输出：Hi! This is Hank!
等待10秒..
Wake up after 10
Eat dinner

LazyMan("Hank").eat("dinner").eat("supper")
输出：Hi This is Hank!
Eat dinner
Eat supper

LazyMan("Hank").sleepFirst(5).eat("supper")
等待5秒
Wake up after 5
Hi This is Hank!
Eat supper
 */

class LazyMan {
  constructor(name) {
    this.name = name
    // this.sayName = this.sayName.bind(this)
    this.queue = [
      () =>
        new Promise((resolve) => {
          console.log(`Hi! this is ${this.name}!`)
          resolve()
        }),
    ]
    setTimeout(async () => {
      for (let todo of this.queue) {
        await todo()
      }
    }, 0)
  }

  // sayName() {
  //   return new Promise((resolve) => {
  //     console.log(`Hi! this is ${this.name}!`)
  //     resolve()
  //   })
  // }

  eat(meal) {
    this.queue.push(
      () =>
        new Promise((resolve) => {
          console.log(`eat ${meal}`)
          resolve()
        })
    )
    return this
  }

  sleep(sec) {
    this.queue.push(
      () =>
        new Promise((resolve) => {
          setTimeout(() => {
            console.log(`Wake up after ${sec} second`)
            resolve()
          }, sec * 1000)
        })
    )
    return this
  }
}

const lazyMan = new LazyMan('Lac')

lazyMan.eat('apple').sleep(3)
