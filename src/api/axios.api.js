import axios from 'axios'
import { Notification } from 'element-ui'
import { createStore } from '../store'

// 创建axios实例
const service = axios.create({
  baseURL: 'http://127.0.0.1:3000', // api的base_url
  timeout: 5000                  // 请求超时时间
});

// request拦截器
service.interceptors.request.use(config => {
  const token = createStore().getters.token // 取得用户token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config;
}, error => {
  // Do something with request error
  console.log(error); // for debug
  Promise.reject(error);
})

// respone拦截器
service.interceptors.response.use(
  response => {
    const code = response.data.code
    const message = response.data.message
    // 401: 用户没登录
    // 404: 没找到数据
    if (code === 401 || code === 404) {
      Notification({
        title: '提示',
        message,
        type: 'warning'
      })
    } else if (code === 500) { // 服务器出错
      Notification({
        title: '内部错误',
        message,
        type: 'error'
      })
    } else {
      return response
    }
  },
  /**
  * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
  * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
  */
//  const res = response.data;
//     if (res.code !== 20000) {
//       Message({
//         message: res.message,
//         type: 'error',
//         duration: 5 * 1000
//       });
//       // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
//       if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
//         MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
//           confirmButtonText: '重新登录',
//           cancelButtonText: '取消',
//           type: 'warning'
//         }).then(() => {
//           store.dispatch('FedLogOut').then(() => {
//             location.reload();// 为了重新实例化vue-router对象 避免bug
//           });
//         })
//       }
//       return Promise.reject(error);
//     } else {
//       return response.data;
//     }
  error => {
    console.log('err' + error);// for debug
    return Promise.reject(error);
  }
)

export default service;
