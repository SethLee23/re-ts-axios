/*
 * @Author: seth
 * @Date: 2020-05-17 00:22:52
 * @LastEditTime: 2020-05-21 22:44:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \re-ts-axios\src\index.ts
 */
import { AxiosRequestConfig } from './types/index'
import xhr from './xhr'
import { buildUrl } from './helpers/url'
function axios(config: AxiosRequestConfig) {
  processConfig(config)
  xhr(config)
}
// 对 xhr 的 config 的 params 进行处理

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
}
function transformURL(config: AxiosRequestConfig) {
  const { url, params } = config
  return buildUrl(url, params)
}
export default axios
