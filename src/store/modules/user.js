import { createSlice } from '@reduxjs/toolkit'
import { request, getToken, saveToken, removeToken } from '@/utils'
import { loginAPI, getProfileAPI } from '@/apis/user'

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
    clearUserInfo(state) {
      state.userInfo = {}
      state.token = ''
      removeToken()
    },
  },
})

const { setToken, setUserInfo, clearUserInfo } = userStore.actions

// 请求登录的异步方法
const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    const res = await loginAPI(loginForm)
    if (res.message === 'OK') {
      dispatch(setToken(res.data.token))
    }
  }
}

// 获取用户信息的异步方法
const fetchUserInfo = () => {
  return async (dispatch) => {
    const res = await getProfileAPI()
    if (res.message === 'OK') {
      dispatch(setUserInfo(res.data))
    }
  }
}

const userReducer = userStore.reducer

export { fetchLogin, fetchUserInfo, clearUserInfo }

export default userReducer
