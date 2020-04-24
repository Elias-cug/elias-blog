import request from '@/utils/request.js'

export function findArticle(data) {
  return request({
    url: '/admin/article/find',
    method: 'get',
    data
  })
}
