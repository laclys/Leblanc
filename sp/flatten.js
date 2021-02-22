/* // 实现一个 flatten 函数，实现如下的转换功能
const obj = {
  a: 1,
  b: [1, 2, { c: true }],
  c: { e: 2, f: 3 },
  g: null,
};
// 转换为
let objRes = {
  a: 1,
  "b[0]": 1,
  "b[1]": 2,
  "b[2].c": true,
  "c.e": 2,
  "c.f": 3,
  g: null,
};
 */

const flatten = (obj) => {
  let ret = {}
  let trans = (key, value) => {
    if (Object(value) !== value) {
      if (!!key) {
        ret[key] = value
      }
    } else if(Array.isArray(value)) {
      value.forEach((item, idx) => {
        trans(`${key}[${idx}]`, value[idx])
      })
      if (value.length === 0) {
        ret[key] = []
      }
    } else {
      objArr = Object.keys(value)
      objArr.forEach(i => {
        trans(key ? `${key}[${i}]` : `${i}`, value[i])
      })

      if (objArr.length === 0 && key) {
        ret[key] = {}
      }
    }
  }
  trans('', obj)
  return ret
}