export const ADD_TO_CART = "ADD_TO_CART" // ACTION TYPE 

/**
 * 
 * @param {*} item 
 * @returns 
 * @description add to cart action
 */
 export const addToCart = (item)=>({
    type: ADD_TO_CART,
    payload : item
}) 
