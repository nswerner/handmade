import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import Root from "./components/root";

// testing imports

import * as SessionApiUtil from './util/session_api_util';

// testing imports


document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    const root = document.getElementById('root');

    // testing

    window.signIn = SessionApiUtil.signIn
    window.signOut = SessionApiUtil.signOut
    window.signUp = SessionApiUtil.signUp

    // testing

    ReactDOM.render(<Root store={store}/>, root);
})