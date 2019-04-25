import { connect } from 'react-redux';
import Cart from './cart';
import { fetchCart } from '../../actions/cart_actions';
import { deleteCartItem, updateCartItem } from '../../actions/cart_item_actions';
import { fetchCurrentCartID } from '../../actions/session_actions';


const msp = (state, ownProps) => {
    const currentUser = state.entities.users[state.session.id];
    
    
    let cart;
    if (Object.values(state.entities.carts).length > 0) {
        cart = Object.values(state.entities.carts)[0];
    } else {
        cart = [];
    }

    let cartItems;
    if (Object.values(state.entities.cartItems).length > 0) {
        cartItems = Object.values(state.entities.cartItems);
    } else {
        cartItems = [];
    }

    let products;
    if (Object.values(state.entities.products).length > 0) {
        products = state.entities.products;
    } else {
        products = {};
    }

    let users;
    if (Object.values(state.entities.users).length > 0) {
        users = state.entities.users;
    } else {
        users = {};
    }



    return({
        currentUser,
        cart,
        cartItems,
        products, 
        users,
        ownProps
    })
}

const mdp = dispatch => {
 

    return({
        fetchCart: (user, id) => dispatch(fetchCart(user, id)),
        fetchCurrentCartID: (user) => dispatch(fetchCurrentCartID(user)),
        deleteCartItem: (user, cartItem) => dispatch(deleteCartItem(user, cartItem)),
        updateCartItem: (user, cartItem) => dispatch(updateCartItem(user, cartItem))
    })
}

export default connect(msp, mdp)(Cart);