import {ADD_TO_WISH_LIST, REMOVE_TO_WISH_LIST} from '../wishListAction'; //action

const intiialState = {
  wishItems: [], // multiple
  wishItemNames: [], // multiple
};

export default function (state = intiialState, action) {
  const {type, payload} = action;
  switch (type) {
    case ADD_TO_WISH_LIST:
      return {
        ...state,
        wishItems: [...state.wishItems, payload],
        wishItemNames:[...state.wishItemNames,payload?.name ]
      };
    case REMOVE_TO_WISH_LIST:
      const itemsLeft = state.wishItems?.filter((item, index) => {
        if (item?.name != payload) return item;
      });
      const tmpwishItemNames=state?.wishItemNames ?.filter((item, index) => {
        if (item != payload) return item;
      });
      return {
        ...state,
        wishItems: [...itemsLeft],
        wishItemNames :tmpwishItemNames
      };
    default:
      return state;
  }
}
