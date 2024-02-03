import {LOGIN, LOG_OUT} from '../authAction';

const initialState = {
  user: {},
  isGuest:true
};
export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
        isGuest:false,
      };
    case LOG_OUT:
      return {
        ...state,
        user: {},
      };

    default:
      return state; //must be like this so it can  presist the reducers
  }
}
