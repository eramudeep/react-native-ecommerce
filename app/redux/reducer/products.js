import { SET_PRODUCTS_LIST } from "../productAction";

 
const intiialState = {
    products :[] //can be  multiple
}

export default (state = intiialState, action) => {
    const {type,payload} =action
    switch (type) {
        case SET_PRODUCTS_LIST :
            return {
                ...state,
                products: payload
            };
        case "ANY_CASE" : 
        return {...state};
        default:
            return {...state};
    }
};