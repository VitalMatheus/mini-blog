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
      const newPost = {
        ...action.payload,
        likes: 0,
        comments: [],
      };
      state.value.unshift(newPost);
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
    },
    likePost: (state, action) => {
      const { postId, userId } = action.payload;
      const post = state.value.find(post => post.id === postId);
      if (post) {
        if (!post.likedBy) {
          post.likedBy = [];
        }
        if (post.likedBy.includes(userId)) {
          post.likes = Math.max(0, (post.likes || 0) - 1);
          post.likedBy = post.likedBy.filter(id => id !== userId);
        } else {
          post.likes = (post.likes || 0) + 1;
          post.likedBy.push(userId);
        }
      }
    },
    addComment: (state, action) => {
      const { id, comment } = action.payload;
      const post = state.value.find(item => item.id === id);
      if (post) {
        if (!post.comments) {
          post.comments = [];
        }
        post.comments.push(comment);
      }
    },
  }
})

export const { addPost, setPost, deletePost, editPost, setSelectedPostId, startEditing, stopEditing, likePost, addComment } = postsSlice.actions

export default postsSlice.reducer