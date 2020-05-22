/*
 * @Author: your name
 * @Date: 2020-05-19 23:12:39
 * @LastEditTime: 2020-05-21 22:52:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \re-ts-axios\src\helpers\url.ts
 */
import { isDate, isObject } from './util'
function encode(val: string): string {
  // 处理特殊字符 转换回来
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}
export function buildUrl(url: string, params?: any): string {
  if (!params) {
    return url
  } else {
    // 多种处理
    let parts: string[] = []
    let paramStr: string = ''
    Object.keys(params).forEach(para => {
      const val = params[para]
      if (val === null || typeof val === 'undefined') {
        return
      }
      let values = []
      // 如果参数中的键值对的值是数组
      if (Array.isArray(val)) {
        values = val
        para += '[]'
        console.log('para', para, 'value', values)
      } else {
        values = [val]
      }
      values.forEach(val => {
        // 分别处理参数是date和参数是对象的情况
        if (isDate(val)) {
          val = val.toISOString()
        } else if (isObject(val)) {
          val = JSON.stringify(val)
        }
        parts.push(`${encode(para)}=${encode(val)}`)
      })
    })
    let serializedParams = parts.join('&')
    if (serializedParams) {
      // 检测是否存在hash标识
      const markIndex = serializedParams.indexOf('#')
      if (markIndex !== -1) {
        url = url.slice(0, markIndex)
      }
      url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams
    }
    return url
  }
}
