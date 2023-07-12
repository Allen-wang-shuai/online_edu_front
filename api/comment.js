import request from '@/utils/request'
export default {
    getPageList(page, limit, courseId) {
        return request({
            url: `/eduservice/comment/${page}/${limit}`,
            method: 'get',
            params: { courseId }
        })
    },
    addComment(comment) {
        return request({
            url: `/eduservice/comment/addComment`,
            method: 'post',
            data: comment
        })
    }
}