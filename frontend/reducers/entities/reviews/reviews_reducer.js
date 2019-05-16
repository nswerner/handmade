import { RECEIVE_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW, CLEAR_REVIEWS } from '../../../actions/review_actions';
import { merge } from 'lodash';


const ReviewsReducer = (oldState = {}, action) => {

    Object.freeze(oldState);
    let newState = merge({}, oldState);

    switch (action.type) {
        case RECEIVE_REVIEWS:
            newState = merge(newState, action.reviews);
            return newState;

        case RECEIVE_REVIEW:
            newState = merge(newState, action.reviews);
            return newState;

        case REMOVE_REVIEW:
            delete newState[action.reviewID];
            return newState;

        case CLEAR_REVIEWS:
            return {};

        default:
            return oldState;
    }
}

export default ReviewsReducer;