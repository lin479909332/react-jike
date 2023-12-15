import { request } from '@/utils'

// 获取频道列表api
export function getChannelListAPI() {
  return request({
    url: '/channels',
    method: 'GET',
  })
}

// 发布文章api
export function createArticleAPI(data) {
  return request({
    url: '/mp/articles?draft=false',
    method: 'POST',
    data,
  })
}
