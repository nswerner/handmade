import * as CartItemsApiUtil from '../util/cart_items_api_util';

export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";
// normal action creators

const receiveCartItem = (response) => {
    debugger
    return({
        type: RECEIVE_CART_ITEM,
        cartItem: response.cartItems
    })
}


// thunk action creators

export const createCartItem = (user, cartItem) => dispatch => {
    return CartItemsApiUtil.createCartItem(user, cartItem)
        .then( response => dispatch(receiveCartItem(response)) )
}