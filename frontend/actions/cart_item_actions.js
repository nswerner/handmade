import * as CartItemsApiUtil from '../util/cart_items_api_util';

export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";


// normal action creators

const receiveCartItem = (response) => {
    debugger
    return({
        type: RECEIVE_CART_ITEM,
        cartItem: response.cartItems
    })
}

const removeCartItem = (response) => {

    return({
        type: REMOVE_CART_ITEM,
        cartItemId: Object.keys(response.cartItems)
    })
}



// thunk action creators

export const createCartItem = (user, cartItem) => dispatch => {
    return CartItemsApiUtil.createCartItem(user, cartItem)
        .then( response => dispatch(receiveCartItem(response)) );
}

export const updateCartItem = (user, cartItem) => dispatch => {
    return CartItemsApiUtil.updateCartItem(user, cartItem)
        .then( response => dispatch(receiveCartItem(response)) );
}

export const deleteCartItem = (user, cartItem) => dispatch => {
    return CartItemsApiUtil.deleteCartItem(user, cartItem)
        .then( response => dispatch(removeCartItem(response)) );
}
