export const USER_ACTION_TYPES = {
  setCurrentUser: "SET_CURRENT_USER",
};

export const setCurrentUser = (user) => ({
  type: USER_ACTION_TYPES.setCurrentUser,
  payload: user,
});
