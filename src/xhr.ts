/*
 * @Author: seth
 * @Date: 2020-05-17 00:34:05
 * @LastEditTime: 2020-05-19 23:04:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \re-ts-axios\src\xhr.ts
 */
import { AxiosRequestConfig } from './types/index'

export default function xhr(config: AxiosRequestConfig): void {
  let { data = null, url, method = 'get' } = config
  let request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url, true)
  request.send(data)
}
