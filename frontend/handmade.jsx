import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import Root from "./components/root";

// testing imports

import * as SessionActions from './actions/session_actions';
import * as ProductActions from './actions/product_actions';
import * as CartActions from './actions/cart_actions';
import * as CartItemActions from './actions/cart_item_actions';

// testing imports


document.addEventListener("DOMContentLoaded", () => {

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    const root = document.getElementById('root');

    // testing

        window.getState = store.getState;
        window.dispatch = store.dispatch;

        // window.signOut = SessionActions.signOut;
        // window.signIn = SessionActions.signIn;
        // window.signUp = SessionActions.signUp;

        // window.fetchProducts = ProductActions.fetchProducts;
        // window.removeProduct = ProductActions.deleteProduct;
        // window.fetchProduct = ProductActions.fetchProduct;
        // window.updateProduct = ProductActions.updateProduct;
        // window.createProduct = ProductActions.createProduct;

        // window.createCart = CartActions.createCart;
        // window.fetchCart = CartActions.fetchCart;

        // window.createCartItem = CartItemActions.createCartItem;
        // window.updateCartItem = CartItemActions.updateCartItem;
        // window.deleteCartItem = CartItemActions.deleteCartItem;

    // testing

    ReactDOM.render(<Root store={store}/>, root);
});