import { ADD_TO_CART,REMOVE_FROM_CART } from "../cartAction"; //action

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
    case REMOVE_FROM_CART:
        const itemsLeft = state.cartItems?.filter((item,index)=>{
              if(item?.name !=  payload)
              return item
        })
        console.log({itemsLeft});
        return {
            ...state,
            cartItems : [...itemsLeft]
        }
        default:
            return state
    }
    
} 