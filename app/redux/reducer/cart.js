import { ADD_TO_CART } from "../cartAction"; //action

const intiialState = {
    cartItems :[] // multiple
}


export default function (state =intiialState,action) {
const {type, payload} =action
    switch (type) {
        case ADD_TO_CART: 
       return  {
            ...state,
            cartItems : [...state.cartItems, payload]
        }
    
        default:
            return state
    }
    
} 