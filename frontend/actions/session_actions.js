import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";


// normal action creators

const receiveCurrentUser = (user) => {
    return({
        type: RECEIVE_CURRENT_USER,
        user
    });
};

const logoutCurrentUser = () => {
    return({
        type: LOGOUT_CURRENT_USER
    });
};

const receiveErrors = (errors) => {
    return({
        type: RECEIVE_ERRORS,
        errors: [...errors]
    });
};


// thunk action creators

export const signIn = (user) => (dispatch) => {
    return SessionApiUtil.signIn(user).then(user => dispatch(receiveCurrentUser(user)), 
        error => dispatch(receiveErrors(error.responseJSON)));
};

export const signUp = (user) => (dispatch) => {
    return SessionApiUtil.signUp(user).then(user => dispatch(receiveCurrentUser(user)), 
        error => dispatch(receiveErrors(error.responseJSON)));
};

export const signOut = () => (dispatch) => {
    return SessionApiUtil.signOut().then(() => dispatch(logoutCurrentUser()), 
        error => dispatch(receiveErrors(error.responseJSON)));
};


