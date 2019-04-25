import { RECEIVE_CURRENT_USER } from '../../../actions/session_actions';
import { RECEIVE_ALL_PRODUCTS, RECEIVE_PRODUCT } from '../../../actions/product_actions';
import { RECEIVE_CART } from '../../../actions/cart_actions';
import { merge } from 'lodash';

const UsersReducer = (oldState = {}, action) => {

  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = merge(newState, {[action.user.id]: action.user});
      return newState;

    case RECEIVE_ALL_PRODUCTS:
      newState = merge(newState, action.merchants );
      return newState;

    case RECEIVE_PRODUCT: 
      newState = merge(newState, action.merchant );
      return newState;

    case RECEIVE_CART:
      newState = merge(newState, action.users);
      return newState;
    
    default:
      return oldState;
  }

};

export default UsersReducer;

