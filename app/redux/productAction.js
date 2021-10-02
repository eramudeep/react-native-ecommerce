export const GET_PRODUCTS="GET_PRODUCTS"
export const SET_PRODUCTS="SET_PRODUCTS"


export const getProducts = (category)=>({
    type: GET_PRODUCTS,
    payload: category
}) 
