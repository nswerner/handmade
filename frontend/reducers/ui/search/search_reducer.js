import { CLEAR_SEARCH, APPEND_SEARCH } from '../../../actions/search_actions';
import { RECEIVE_CURRENT_USER } from './../../../actions/session_actions';

const SearchReducer = (oldState = null, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case CLEAR_SEARCH:
            return "";

        case APPEND_SEARCH:
            return action.input;

        case RECEIVE_CURRENT_USER:
            return "";

        default:
            return oldState;
    }


};

export default SearchReducer;