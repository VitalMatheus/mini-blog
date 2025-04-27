export const persistUser = store => next => action => {
  const result = next(action);

  const actionsToPersist = ['signup/setUser', 'signup/logout'];

  if (actionsToPersist.includes(action.type)) {
    const user = store.getState().signup.user;
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }

  return result;
};
