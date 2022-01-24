export const GET_PRODUCTS="GET_PRODUCTS"
export const SET_PRODUCTS="SET_PRODUCTS"

export const GET_PRODUCTS_LIST="GET_PRODUCTS_LIST"
export const SET_PRODUCTS_LIST="SET_PRODUCTS_LIST"


export const getProducts = (category)=>({
    type: GET_PRODUCTS,
    payload: category
}) 


export const getProductsList = (payload)=>({
    type: GET_PRODUCTS_LIST,
    payload 
}) 

