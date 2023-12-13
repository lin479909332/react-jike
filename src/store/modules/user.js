import { request } from '@/utils'
import { createSlice } from '@reduxjs/toolkit'

const userStore = createSlice({
  name: 'user',
  initialState: {
    token: localStorage.getItem('token_key') || '',
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload
      localStorage.setItem('token_key', action.payload)
    },
  },
})

const { setToken } = userStore.actions

// 请求登录的异步方法
const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    const res = await request.post('/authorizations', loginForm)
    if (res.message === 'OK') {
      dispatch(setToken(res.data.token))
    }
  }
}

const userReducer = userStore.reducer

export { setToken, fetchLogin }

export default userReducer
