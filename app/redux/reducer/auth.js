import {LOGIN, LOG_OUT} from '../authAction';

const initialState = {
  user: {},
};
export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
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
