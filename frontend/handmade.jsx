import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import Root from "./components/root";

// testing imports

import * as SessionActions from './actions/session_actions';

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

        window.signIn = SessionActions.signIn;
        window.signOut = SessionActions.signOut;
        window.signUp = SessionActions.signUp;

        window.getState = store.getState;
        window.dispatch = store.dispatch;

    // testing

    ReactDOM.render(<Root store={store}/>, root);
});