interface Logger {
  time: number;
  asyncLog:(msg: string) => Promise<string>
  syncLog:(msg: string) => number;
}

// type Translate<T> = /** 你需要实现的部分 **/;

// // 要求 Translate
// //  1. 提取出为函数类型的属性，丢弃掉其它类型的属性
// //  2. 将函数返回类型调整为形参类型(假定有且只有一个参数)

// // 实现效果如下:
// type T0 = Translate<Logger>;

// // // 等价于
// type T0 = {
//     // 其它属性被丢弃
//     asyncLog: (arg: string) => string; // return 类型被调整为跟 arg 保持一致
//     syncLog: (arg: string) => string; // return 类型被调整为跟 arg 保持一致
// }

// const result: T0 = {
//     asyncLog(msg: string) { return msg }
// };

type FilterTypes<T, U> = {
  [Key in keyof T]: T[Key] extends U ? Key : never
}

type FilterKeys<T, U> = FilterTypes<T, U>[keyof T]

type SubType<T, U> = Pick<T, FilterTypes<T, U>[keyof T]>

type ArgAsReturn<T> = {
  [K in keyof T]: T[K] extends ((args: infer U) => any) ? ((args: U) => U) : never
}

type Translate<T> = ArgAsReturn<SubType<T, Function>>

type T0 = Translate<Logger>