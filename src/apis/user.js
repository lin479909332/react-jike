import { request } from '@/utils'

export function loginAPI(loginForm) {
  return request({
    url: '/authorizations',
    method: 'POST',
    data: loginForm,
  })
}

export function getProfileAPI() {
  return request({
    url: '/user/profile',
    method: 'GET',
  })
}
