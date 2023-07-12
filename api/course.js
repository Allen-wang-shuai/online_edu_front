import request from '@/utils/request'

export default {

    //分页条件查询
    getPageList(page, limit, searchObj) {
        return request({
            url: `/eduservice/coursefront/${page}/${limit}`,
            method: 'post',
            data: searchObj
        })
    },

    //查询所有课程分类的方法
    getAllSubject() {
        return request({
            url: `/eduservice/subject/getAllSubject`,
            method: 'get'
        })
    },

    //根据课程id查询当前课程信息以及其讲师信息
    getById(courseId) {
        return request({
            url: `/eduservice/coursefront/${courseId}`,
            method: 'get'
        })
    }

}