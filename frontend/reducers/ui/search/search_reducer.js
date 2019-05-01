import { CLEAR_SEARCH, APPEND_SEARCH } from '../../../actions/search_actions';

const SearchReducer = (oldState = null, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case CLEAR_SEARCH:
            return "";

        case APPEND_SEARCH:
            return action.input

        default:
            return oldState;
    }


};

export default SearchReducer;