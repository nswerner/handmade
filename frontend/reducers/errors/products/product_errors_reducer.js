import { 
    RECEIVE_PRODUCT_ERRORS, 
    RECEIVE_PRODUCT, 
    RECEIVE_ALL_PRODUCTS, 
    REMOVE_PRODUCT
} from '../../../actions/product_actions';

const SessionErrorsReducer = (oldState = [], action) => {

    Object.freeze(oldState);
    let newState = [];

    switch (action.type) {

        case RECEIVE_PRODUCT:
            return newState;

        case RECEIVE_ALL_PRODUCTS:
            return newState;

        case REMOVE_PRODUCT:
            return newState;
        
        case RECEIVE_PRODUCT_ERRORS:
            newState = newState.concat(action.errors);
            return newState;

        default:
            return oldState;
    }

};


export default SessionErrorsReducer;
