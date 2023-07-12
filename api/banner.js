import request from '@/utils/request'
export default {

    //获取幻灯片信息
    getBannerList() {
        return request({
            url: `/cmsservice/bannerfront/getAllBanner`,
            method: 'get'
        })
    }

}