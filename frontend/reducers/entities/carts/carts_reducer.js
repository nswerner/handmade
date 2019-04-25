import { RECEIVE_CART } from '../../../actions/cart_actions';
import { LOGOUT_CURRENT_USER } from '../../../actions/session_actions';
import { merge } from 'lodash';


const CartsReducer = (oldState = {}, action) => {

    Object.freeze(oldState);
    let newState = merge({}, oldState);

    switch (action.type) {
        case RECEIVE_CART:
            newState = merge(newState, action.cart);
            return newState;

        case LOGOUT_CURRENT_USER:
            return {};

        default:
            return oldState;
    }

}

export default CartsReducer;