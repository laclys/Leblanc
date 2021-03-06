Function.prototype.myCall = (context, ...args) => {
  context = context || window
  const symbol = new Symbol()
  context[symbol] = this
  context[symbol](...args)
  delete context[symbol]
}

Function.prototype.myApply = (context, args) => {
  context = context || window
  const symbol = new Symbol()
  context[symbol] = this
  if (args && Array.isArray(args)) {
    context[symbol](...args)
  } else {
    context[symbol]()
  }
  delete context[symbol]
}



function _new() {
  let obj = {}
  let con = [].shift.apply(arguments)
  obj.__proto__ = con.prototype
  let ret = con.apply(obj, arguments)
  return ret instanceof Object ? ret : obj
}

function deepCopy(obj) {
  function isObject(o) {
    return (typeof o === 'object' || typeof o === 'function') && o !== null
  }

  if (!isObject(obj)) {
    throw new Error('非对象')
  }

  let newObj = Array.isArray(obj) ? [...obj] : { ...obj }

  Object.keys(newObj).forEach((item) => {
    newObj[item] = isObject(obj[item]) ? deepCopy(obj[item]) : obj[key]
  })
  return newObj
}

// 节流
function throttle(fn, wait) {
  let canRun = true
  return function () {
    if (!canRun) return
    canRun = false
    setTimeout(() => {
      fn.apply(this, arguments)
      canRun = true
    }, wait)
  }
}

// 防抖
function debounce(fn, wait) {
  let timer = null
  return function () {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, wait)
  }
}


