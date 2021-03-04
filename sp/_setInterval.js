// brower only

const _setInterval = (cb, wait) => {
  let timer
  const now = Date.now
  let startTime = now()
  let endTime = startTime
  const loop = () => {
    timer = window.requestAnimationFrame(loop)
    endTime = now()
    if (endTime - startTime >= wait) {
      startTime = now()
      endTime = startTime
      cb(timer)
    }
  }
  timer = window.requestAnimationFrame(loop)
  return timer
}

// eg.
let a = 0
_setInterval((timer) => {
  console.log(1)
  a++
  if (a === 5) {
    cancelAnimationFrame(timer)
  }
}, 1000)