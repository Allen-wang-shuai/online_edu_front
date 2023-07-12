import request from '@/utils/request'

export default {

    //获取前台讲师列表
    getPageList(page, limit) {
        return request({
            url: `/eduservice/teacherfront/${page}/${limit}`,
            method: 'get'
        })
    },

    //获取讲师详情
    getById(teacherId) {
        return request({
            url: `/eduservice/teacherfront/${teacherId}`,
            method: 'get'
        })
    }

}