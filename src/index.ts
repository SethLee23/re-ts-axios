/*
 * @Author: seth
 * @Date: 2020-05-17 00:22:52
 * @LastEditTime: 2020-05-17 00:43:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \re-ts-axios\src\index.ts
 */
import { AxiosRequestConfig } from './types/index'
import xhr from './xhr'
function axios(config: AxiosRequestConfig) {
  xhr(config)
}
export default axios
