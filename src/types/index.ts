// import { type } from "os";

/*
 * @Author: seth
 * @Date: 2020-05-17 00:26:19
 * @LastEditTime: 2020-05-19 22:30:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \re-ts-axios\src\types\index.ts
 */
// interface 的字面量
export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'
export interface AxiosRequestConfig {
  method?: Method
  url: string
  data?: any
  params?: any
}
