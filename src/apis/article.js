import { request } from '@/utils'

export function getChannelListAPI() {
  return request({
    url: '/channels',
    method: 'GET',
  })
}
