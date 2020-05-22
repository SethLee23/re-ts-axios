/*
 * @Author: your name
 * @Date: 2020-05-19 23:38:42
 * @LastEditTime: 2020-05-19 23:48:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \re-ts-axios\src\helpers\util.ts
 */
const toString = Object.prototype.toString
// 类型谓词保护
export function isDate(val: any): val is Date {
  return toString.call(val) === '[object date]'
}

export function isObject(val: any): val is object {
  return val !== null && typeof val === 'object'
}
