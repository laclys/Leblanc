function curry (fn, currArgs) {

  return function(...args) {
      // let args = [].slice.call(arguments);
      // 首次调用时，若未提供最后一个参数currArgs，则不用进行args的拼接
      if (currArgs !== undefined) {
          args = args.concat(currArgs);
      }

      // 递归调用
      if (args.length < fn.length) {
          return curry(fn, args);
      }

      // 递归出口
      return fn(...args);
  }
}

// function sum(a, b, c) {
//   console.log('sum', a + b + c);
// }

// const fn = curry(sum);

// fn(1, 2, 3); // 6
// fn(1, 2)(3); // 6
// fn(1)(2, 3); // 6
// fn(1)(2)(3); 


function curry (fn, curArgs) {
    return function (...args) {
        if (curArgs !== undefined) {
            args = args.concat(curArgs)
        }
        if (args.length < fn.length) {
            return curry(fn, args)
        }
        return fn(...args)
    }
}