const flatArr = arr =>  arr.reduce((pre, cur) => pre.concat(Array.isArray(cur) ? flatArr(cur) : cur), [])


const flatArr2 = (arr) => {
  const ret = []
  const stack = [].concat(arr)
  while(stack.length !== 0) {
    const temp = stack.pop()
    if (Array.isArray(temp)) {
      stack.push(...temp)
    } else {
      ret.unshift(tmp)
    }
  }
  return ret
}