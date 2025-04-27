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
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.isSignedUp = true;
    },
    logout: (state) => {
      state.user = null;
      state.isSignedUp = false;
      state.username = '';
    },
  }
})

export const { setUserName, setIsSignedUp, setUser, logout } = signupSlice.actions

export default signupSlice.reducer