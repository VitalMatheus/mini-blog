export const loadPostsFromLocalStorage = () => {
  try {
    const serializedPosts = localStorage.getItem('posts');
    if (serializedPosts === null) {
      return [];
    }
    return JSON.parse(serializedPosts);
  } catch (e) {
    console.error('Failed to load posts from localStorage', e);
    return [];
  }
};
