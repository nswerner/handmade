import { RECEIVE_ALL_PRODUCTS, RECEIVE_PRODUCT, REMOVE_PRODUCT, FILTER_PRODUCTS } from '../../../actions/product_actions';
import { RECEIVE_CART } from '../../../actions/cart_actions';
import { merge } from 'lodash';


const ProductsReducer = (oldState = {}, action) => {

    Object.freeze(oldState);
    let newState = merge({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_PRODUCTS:
            newState = merge(newState, action.products);
            return newState;

        case RECEIVE_PRODUCT:
            newState = merge(newState, action.product);
            return newState;

        case REMOVE_PRODUCT:
            delete newState[action.id];
            return newState;

        case RECEIVE_CART:
            newState = merge(newState, action.products)
            return newState;

        case FILTER_PRODUCTS:
            return merge({}, action.products);

        default: 
            return oldState;
    }

}

export default ProductsReducer;
