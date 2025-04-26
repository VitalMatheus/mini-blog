import { createSlice } from '@reduxjs/toolkit'

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    value: [],
    selectedPostId: null,
    isEditing: false,
  },
  reducers: {
    addPost: (state, action) => {
      state.value.unshift(action.payload);
    },
    setPost: (state, action) => {
      state.value = action.payload;
    },
    deletePost: (state) => {
      state.value = state.value.filter((post) => post.id !== state.selectedPostId);
    },
    editPost: (state, action) => {
      const { id, title, content } = action.payload;
      const post = state.value.find((post) => post.id === id);
      if (post) {
        post.title = title;
        post.content = content;
      }
    },
    setSelectedPostId: (state, action) => {
      state.selectedPostId = action.payload;
    },
    startEditing: (state) => {
      state.isEditing = true;
    },
    stopEditing: (state) => {
      state.isEditing = false;
    }
  }
})

export const { addPost, setPost, deletePost, editPost, setSelectedPostId, startEditing, stopEditing } = postsSlice.actions

export default postsSlice.reducer