// @ts-nocheck
import instance from './axios'
// 配置了基础的请求
const request = async (p: any) => {
    // 从参数中获取 axios 参数，并且写上默认值
    const { url, method = 'GET', header = '', data = '', params = '' } = p
    // 发起网络请求
    const res = await instance({
        url,
        // 请求方式的处理 -> 将所有的请求方式转为大写
        method: method.toUpperCase(),
        // GET 请求的参数
        params,
        // POST 请求的参数
        data,
        header
    })
    return res
}

export default request
