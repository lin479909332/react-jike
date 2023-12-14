import { request, getToken, saveToken } from '@/utils'
import { createSlice } from '@reduxjs/toolkit'

const userStore = createSlice({
  name: 'user',
  initialState: {
    token: getToken() || '',
    // 用户信息
    userInfo: {},
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload
      saveToken(action.payload)
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload
    },
  },
})

const { setToken, setUserInfo } = userStore.actions

// 请求登录的异步方法
const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    const res = await request.post('/authorizations', loginForm)
    if (res.message === 'OK') {
      dispatch(setToken(res.data.token))
    }
  }
}

// 获取用户信息的异步方法
const fetchUserInfo = () => {
  return async (dispatch) => {
    const res = await request.get('/user/profile')
    if (res.message === 'OK') {
      dispatch(setUserInfo(res.data))
    }
  }
}

const userReducer = userStore.reducer

export { setToken, fetchLogin, fetchUserInfo }

export default userReducer
