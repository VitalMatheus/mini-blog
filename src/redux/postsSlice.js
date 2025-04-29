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
        comments: [],
        likedBy: [],
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
      const { postId, username } = action.payload;
      const post = state.value.find(post => post.id === postId);

      if (!post) return;

      post.likedBy = post.likedBy || [];

      const alreadyLiked = post.likedBy.includes(username);

      post.likedBy = alreadyLiked
        ? post.likedBy.filter(id => id !== username)
        : [...post.likedBy, username];
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