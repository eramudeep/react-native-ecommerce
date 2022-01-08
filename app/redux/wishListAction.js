export const ADD_TO_WISH_LIST = 'ADD_TO_WISH_LIST'; // ACTION TYPE
export const REMOVE_TO_WISH_LIST = 'REMOVE_TO_WISH_LIST'; // ACTION TYPE

export const addToWishList = (itemInfo) => ({
  type: ADD_TO_WISH_LIST,
  payload: itemInfo,
});

export const removeToWishList = (itemInfo) => ({
  type: REMOVE_TO_WISH_LIST,
  payload: itemInfo,
});
