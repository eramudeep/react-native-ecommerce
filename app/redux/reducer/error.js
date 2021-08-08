const { SET_ERROR_SUCCESS } = require("../actionTypes");
const initialState = {
    hasError: {},
}
export default function (state = initialState, action) {
    switch (action.type) {
        case SET_ERROR_SUCCESS:
            return {
                ...state,
                hasError: { ...action.payload },
            }
        default:
            return  state   //must be like this so it can  presist the reducers
    }
}