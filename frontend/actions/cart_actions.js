import * as CartApiUtil from '../util/cart_api_util';
import Cart from '../components/carts/cart';

export const RECEIVE_CART = "RECEIVE_CART"

// CHANGE THIS: PASSING UNDEFINED PRODUCTS AND CART ITEMS WHEN CART IS EMPTY - SEE HOW REDUCERS HANDLE IT
// normal actions
const receiveCart = (payload) => {
    debugger
    return ({
        type: RECEIVE_CART,
        cart: payload.cart,
        products: payload.products,
        cartItems: payload.cartItems,
        users: payload.users
    })
}




// Maybe CHANGE THIS TO RECEIVE NEW CART
// thunk actions
export const createCart = user => dispatch => {
    return CartApiUtil.createCart(user)
        .then( (payload) => dispatch(receiveCart(payload)) )
}

export const fetchCart = (user, id) => dispatch => {
    return CartApiUtil.fetchCart(user, id)
        .then( (payload) => dispatch(receiveCart(payload)) )
}

