export const LOGIN = 'LOGIN'; // ACTION TYPE
export const LOG_OUT = 'LOG_OUT'; // ACTION TYPE

export const loginUser = (userInfo) => ({
  type: LOGIN,
  payload: userInfo,
});

export const logoutUser = () => ({
  type: LOG_OUT,
});
