import request from '@/utils/request'

export default {

    //根据课程id用户id创建订单
    createOrder(courseId) {
        return request({
            url: `/orderservice/order/createOrder/${courseId}`,
            method: 'post',
        })
    },

    //根据订单编号返回订单信息
    getOrder(courseNo) {
        return request({
            url: `/orderservice/order/getOorder/${courseNo}`,
            method: 'get'
        })
    },

    //生成微信支付二维码
    createNative(orderNo) {
        return request({
            url: `/orderservice/paylog/createNative/${orderNo}`,
            method: 'get'
        })
    },
    //4、根据id获取订单支付状态
    queryPayStatus(orderNo) {
        return request({
            url: `/orderservice/paylog/queryPayStatus/${orderNo}`,
            method: 'get'
        })
    }

}