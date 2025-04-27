import { configureStore } from '@reduxjs/toolkit'
import signupSlice from './signupSlice'
import postsSlice from './postsSlice'
import { persistPosts } from './middlewares/persistPosts';
import { persistUser } from './middlewares/persistUser';
import { loadPostsFromLocalStorage } from './loadPosts';
import { loadUserFromLocalStorage } from './loadUser';

const preloadedPosts = loadPostsFromLocalStorage();
const preloadedUser = loadUserFromLocalStorage();

export default configureStore({
  reducer: {
    signup: signupSlice,
    posts: postsSlice,
  },
  preloadedState: {
    posts: {
      value: preloadedPosts,
      selectedPostId: null,
      isEditing: false,
    },
    signup: {
      user: preloadedUser,
    },
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistPosts, persistUser)
})