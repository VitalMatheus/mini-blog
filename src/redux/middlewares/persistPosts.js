export const persistPosts = store => next => action => {
  const result = next(action);

  const actionsToPersist = ['posts/likePost', 'posts/addComment'];

  if (actionsToPersist.includes(action.type)) {
    const posts = store.getState().posts.value;
    localStorage.setItem('posts', JSON.stringify(posts));
  }

  return result;
};
