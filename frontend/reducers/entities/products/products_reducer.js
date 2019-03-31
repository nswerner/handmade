import { RECEIVE_ALL_PRODUCTS, RECEIVE_PRODUCT, REMOVE_PRODUCT } from '../../../actions/product_actions';
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

        default: 
            return oldState;
    }

}

export default ProductsReducer;
