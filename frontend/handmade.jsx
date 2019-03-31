import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import Root from "./components/root";

// testing imports

import * as SessionActions from './actions/session_actions';
import * as ProductActions from './actions/product_actions';

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

        window.fetchProducts = ProductActions.fetchProducts;
        window.removeProduct = ProductActions.deleteProduct;
        window.fetchProduct = ProductActions.fetchProduct;
        window.updateProduct = ProductActions.updateProduct;
        window.createProduct = ProductActions.createProduct;

    // testing

    ReactDOM.render(<Root store={store}/>, root);
});