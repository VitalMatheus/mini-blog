import { createSlice } from '@reduxjs/toolkit'

export const signupSlice = createSlice({
  name: 'signup',
  initialState: {
    username: '',
    isSignedUp: false
  },
  reducers: {
    setUserName: (state, action) => {
      state.username = action.payload
    },
    setIsSignedUp: (state, action) => {
      state.isSignedUp = action.payload
    }
  }
})

export const { setUserName, setIsSignedUp } = signupSlice.actions

export default signupSlice.reducer