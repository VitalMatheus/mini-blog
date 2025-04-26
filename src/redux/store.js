import { configureStore } from '@reduxjs/toolkit'
import signupSlice from './signupSlice'
import postsSlice from './postsSlice'

export default configureStore({
  reducer: {
    signup: signupSlice,
    posts: postsSlice,
  }
})