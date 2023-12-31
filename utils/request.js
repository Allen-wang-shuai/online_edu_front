import axios from 'axios'
import cookie from 'js-cookie'
import { MessageBox, Message } from 'element-ui'

// 创建axios实例
const service = axios.create({
    baseURL: 'http://localhost:8222', // api的base_url
    timeout: 20000 // 请求超时时间
})

//创建http request拦截器，只要通过request发送请求就会被拦截处理
//往hearder里面放token值，以便后台获得token值
service.interceptors.request.use(
    //如果cookie中含有'guli_token'字符串则将该字符串设置到header中以便后台从header中取出token值
    config => {
        if (cookie.get('guli_token')) {
            //将cookie值放到header
            config.headers['token'] = cookie.get('guli_token')
        }
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

// http response 拦截器
service.interceptors.response.use(
    response => {
        //debugger
        if (response.data.code == 28004) {
            console.log("response.data.resultCode是28004")
            // 返回 错误代码-1 清除ticket信息并跳转到登录页面
            //debugger
            window.location.href = "/login"
            return
        } else {
            if (response.data.code !== 20000) {
                //25000：订单支付中，不做任何提示
                if (response.data.code != 25000) {
                    Message({
                        message: response.data.message || 'error',
                        type: 'error',
                        duration: 5 * 1000
                    })
                }
            } else {
                return response;
            }
        }
    },
    error => {
        return Promise.reject(error.response)   // 返回接口返回的错误信息
    });

export default service