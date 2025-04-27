export const persistPosts = store => next => action => {
  const result = next(action);

  const actionsToPersist = ['posts/addPost', 'posts/editPost', 'posts/deletePost', 'posts/likePost', 'posts/addComment'];

  if (actionsToPersist.includes(action.type)) {
    const posts = store.getState().posts.value;
    localStorage.setItem('posts', JSON.stringify(posts));
  }

  return result;
};
